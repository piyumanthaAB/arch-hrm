import path from 'path';
import { json } from 'express';
import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
const __dirname = path.resolve();

const app = express();

app.use(morgan('dev'));

// read data coming from html forms.
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// body parser, reading JSON data from body into req.body
app.use(express.json({ limit: '10kb' }));

export default app;
