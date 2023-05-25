import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..")
const envFilePath = path.resolve(rootDir, process.env.NODE_ENV + '.env')

dotenv.config({
    path: envFilePath
});


export const PORT = process.env.PORT || 3001;
export const NODE_ENV = process.env.NODE_ENV || 'development'
export const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/helsinki_bike_app_db'

