import { Request, Response } from 'express';
import query from '../config/database';


export const listAllProteins = async (req: Request, res: Response) => {
    const response = await query('SELECT * FROM protein_info');
    res.status(200).send(response.rows);
}