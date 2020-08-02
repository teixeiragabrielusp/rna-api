import express from 'express';
import {
    listAllProteins,
    listProteinById
} from '../controllers/index';

let router = express.Router();

router.get('/proteins', listAllProteins);

router.get('/proteins/:id', listProteinById);

export default router;
