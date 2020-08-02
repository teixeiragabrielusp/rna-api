import { Request, Response } from 'express';
import query from '../config/database';
import {
    httpErrorHelper,
    httpResponseHelper
} from '../helpers/index'


//SELECT protein_accession, description, label, synonyms FROM protein_info;'

export const listAllProteins = async (req: Request, res: Response) => {

    let limit: any = req.query.limit;
    let page: any = req.query.page;
    let offset = (page - 1) * limit;

    const response = await query('SELECT protein_accession, description, label, synonyms FROM protein_info LIMIT $1 OFFSET $2;', [limit, offset]);
    console.log(response.rowCount)
    res.status(200).json(httpResponseHelper(
        response.rows,
        Number(req.query.page)
    ));
}

export const listProteinById = async (req: Request, res: Response) => {

    const proteinId = req.params.id;
    const response = await query('SELECT protein_accession, description, label, synonyms FROM protein_info WHERE protein_accession = $1', [proteinId]);

    if(response.rowCount === 0) 
        return res.status(404).json(httpErrorHelper({
            code: 404,
            message: 'ID NOT FOUND'
        }));
        
    return res.status(200).json(httpResponseHelper(
        response.rows
    ));
    
}