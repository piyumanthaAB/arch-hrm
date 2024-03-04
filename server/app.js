import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import globalErrorHandler from './controllers/errorController.js';
import bodyParser from 'body-parser';
import path from 'path';
const __dirname = path.resolve();
import AppError from './utils/AppError.js';
import rateLimit from 'express-rate-limit';
import mongoSanitize from 'express-mongo-sanitize';
import xss from 'xss-clean';

//routers import
import { userRouter } from './routes/userRoutes.js';
import { authRouter } from './routes/authRoutes.js';

const app = express();

app.use(morgan('dev'));

if (process.env.NODE_ENV === 'production') {
  // Limit no of requests from same IP
  const limiter = rateLimit({
    max: 1000,
    windowMs: 60 * 60 * 1000,
    message: 'Too many requests from this IP, please try again in an hour ! ',
  });
  app.use(limiter);
}

// data sanitization against NoSql query injection
app.use(mongoSanitize());

// data sanitization against XSS
app.use(xss());

// read cookies into req object
app.use(cookieParser());

// read data coming from html forms.
app.use(bodyParser.urlencoded({ extended: true, limit: '10kb' }));

// body parser, reading JSON data from body into req.body
app.use(express.json({ limit: '10kb' }));

// routes
app.use('/api/v1/users', userRouter);
app.use('/api/v1/auth', authRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}

// catch all the other undefined routes
app.all('*', (req, res, next) => {
  next(new AppError(`cannot find ${req.originalUrl} on this server !`, 404));
});

//global error handler use
app.use(globalErrorHandler);

export default app;
