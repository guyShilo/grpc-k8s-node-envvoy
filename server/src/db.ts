require('dotenv').config();
import * as mongoose from 'mongoose';

const { DB_PASSWORD,
    DB_USERNAME,
    DB_HOST,
    DB_NAME
} = process.env;

export async function connectDB() {
    try {
        await mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`);
        console.log(`Connected to ${DB_HOST}`)
    } catch (e) {
        console.error(e);
        throw e
    }
}