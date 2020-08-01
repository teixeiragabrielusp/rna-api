import express from 'express';
import {
    listAllProteins
} from '../controllers/index';

let router = express.Router();

router.get('/', listAllProteins);

export default router;
