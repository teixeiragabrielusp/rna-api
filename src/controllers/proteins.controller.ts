import { Request, Response } from 'express';
import query from '../config/database';
import {
    httpErrorHelper,
    httpResponseHelper
} from '../helpers/index';

export const listAllProteins = async (req: Request, res: Response) => {

    try {
        let limit: any = req.query.limit;
        let page: any = req.query.page;
        let offset = (page - 1) * limit;

        if(!limit && !page) {
            const response = await query('SELECT protein_accession, description, label, synonyms FROM protein_info;');

            return res.status(200).json(httpResponseHelper(
                response.rows,
                Number(req.query.page)
            ));
        }
    
        const response = await query('SELECT protein_accession, description, label, synonyms FROM protein_info LIMIT $1 OFFSET $2;', [limit, offset]);

        if(response.rowCount === 0) 
            return res.status(400).json(httpErrorHelper({
                code: 400,
                message: 'NULL DATA'
            }));
    
        return res.status(200).json(httpResponseHelper(
            response.rows,
            Number(req.query.page)
        ));
    }
    catch (err) {
        return res.status(400).json(httpErrorHelper({
            code: 400,
            message: err.name
        }));
    }
}

export const listProteinById = async (req: Request, res: Response) => {

    try {
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
    catch(err) {
        return res.status(400).json(httpErrorHelper({
            code: 400,
            message: err.name
        }));
    } 
}
