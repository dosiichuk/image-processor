import express, { Express } from 'express';
import imageRouter from './routes/image';

export const app: Express = express();
app.use('/api', imageRouter);
