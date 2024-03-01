import path from 'path';
import { json } from 'express';
import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
const __dirname = path.resolve();

import globalErrorHandler from './controllers/errorController.js';

//routers import
import { userRouter } from './routes/userRoutes.js';

const app = express();

app.use(morgan('dev'));

// read data coming from html forms.
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// body parser, reading JSON data from body into req.body
app.use(express.json({ limit: '10kb' }));

// routes
app.use('/api/v1/users', userRouter);

// catch all the other undefined routes
app.all('*', (req, res, next) => {
  next(new AppError(`cannot find ${req.originalUrl} on this server !`, 404));
});

//global error handler use
app.use(globalErrorHandler);

export default app;
