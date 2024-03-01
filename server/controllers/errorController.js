import AppError from '../utils/AppError.js';

// send errors in development environment. send all the error information to the console.
const sendErrDev = (err, res) => {
  console.log({ '💥💥 error (env = development) => 💥💥': err });

  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

// send errors in production environment. send a generic message, dont send all the error information to client

const sendErrProd = (err, res) => {
  // operational errors. Errors which defined by developer.They are created using 'AppError' class, and they have an attribute 'isOperational'
  // example : if user tried to access unauthorized resource, we can create an error using this 'AppError' class, it will be like below
  // return new AppError('you dont have permission to access this resource',403);

  if (err.isOperational) {
    console.log({
      '💥💥 ==== ERROR (env = production | operational error) ==== 💥💥': err,
    });

    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    // Programming or other unknown error: do not sent error details to the client
    // ex : try to reassign a const variable

    console.log({
      '💥💥 ==== ERROR (env = production | programming or unknown error ) ==== 💥💥':
        err,
    });

    // send a generic message
    res.status(500).json({
      status: 'error',
      message: 'Something went very wrong! Please Try again later',
    });
  }
};

// ================== CUSTOM error Methods (mongodb,jwt,multer) defines START ===================

// handle mongo DB validation  error in production
const handleValidationErrorDB = (error) => {
  let message = `Validation Error ;( ${error.message}`;

  return new AppError(message, 400);
};

// handle mongo DB unique fields duplication error in production
const handleDuplicateFieldErrorDB = (error) => {
  let message = `Already Existing Value =>  `;

  for (const key in error.keyValue) {
    message += `${key}: ${error.keyValue[key]}`;
  }

  return new AppError(message, 400);
};

// ================== CUSTOM error Methods defines END ===================

const globalErrorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    // send error if the running environment is development
    sendErrDev(err, res);
  } else if (process.env.NODE_ENV === 'production') {
    let error = { ...err };
    error.message = err.message;

    // if error is a mongodb duplicate fields error
    if (error.code === 11000) {
      error = handleDuplicateFieldErrorDB(error);
    }

    // if error is a mongodb validation error
    if (
      error._message?.includes('Validation failed') ||
      error._message?.includes('validation failed')
    ) {
      error = handleValidationErrorDB(error);
    }

    // console.log(error);

    // send error if the running environment is production
    sendErrProd(error, res);
  }
};

export default globalErrorHandler;
