import { Request, Response } from 'express';
import query from '../config/database';

//SELECT protein_accession, description, label, synonyms FROM protein_info;'

export const listAllProteins = async (req: Request, res: Response) => {
    let limit = 2;
    // let direction = 'DESC'
    const response = await query('SELECT protein_accession, description, label, synonyms FROM protein_info LIMIT $1;', [limit]);
    console.log(response.rowCount)
    res.status(200).json(response.rows);
}

export const listProteinById = async (req: Request, res: Response) => {
    const proteinId = req.params.id;
    console.log(proteinId)
    const response = await query('SELECT protein_accession, description, label, synonyms FROM protein_info WHERE protein_accession = $1', [proteinId]);
    res.status(200).json(response.rows);
}