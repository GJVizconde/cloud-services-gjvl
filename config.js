import { config } from 'dotenv';

config();

export const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME;
export const AWS_DEFAULT_REGION = process.env.AWS_DEFAULT_REGION;
export const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
export const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;
