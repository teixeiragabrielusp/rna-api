import {
    Pool
} from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool ({
    connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
    console.log('Database connected successfully!');
});

const query = (text: string, params?: any) => pool.query(text, params);

export default query;
