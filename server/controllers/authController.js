import AppError from '../utils/AppError.js';
import catchAsync from '../utils/catchAsync.js';
import User from '../models/userModel.js';
import * as helper from './../utils/helpers.js';
import jwt from 'jsonwebtoken';
import { promisify } from 'util';

// ============ Middleware Start ========================

// @ DESCRIPTION            =>  check whether the user is authenticated or not.
const protect = catchAsync(async (req, res, next) => {
  const token = req.cookies.jwt;

  // 1. check if user has the jwt token
  if (!token) {
    return next(
      new AppError('You are not logged in !, Please login again.', 401)
    );
  }

  // 2. verify token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  // 3. check if user still exists
  const currentUser = await User.findById(decoded.id);

  if (!currentUser) {
    return next(
      new AppError('The user who had this token is no longer available !', 401)
    );
  }

  //4) Check if user changed password after token was issued
  if (currentUser.passwordChangedAfter(decoded.iat)) {
    return next(
      new AppError('User recently changed password! Log in again', 401)
    );
  }

  // embed current user to the request object
  req.user = currentUser;

  next();
});

// @ DESCRIPTION            =>  allow access to certain controllers only to specific user roles
const allowedOnlyTo = (...roles) => {
  return (req, res, next) => {
    // roles= ['admin','user','university']
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError("You don't have permission to perform this action !", 403)
      );
    }
    next();
  };
};

// ============ Middleware End ========================

// @ DESCRIPTION        =>  User Login
const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError('Please provide email and password', 400));
  }

  const user = await User.findOne({ email }).select('+password +active');

  if (!user) {
    return next(new AppError('Invalid email or password! Try again.', 400));
  }

  if (!user?.active) {
    return next(
      new AppError(
        'This account is deactivated. Please Contact the Administration',
        400
      )
    );
  }

  if (!(await user?.correctPassword(password, user.password))) {
    return next(new AppError('Invalid email or password! Try again.', 401));
  }

  helper.createSendToken(user, 200, req, res);
});

// @ DESCRIPTION        =>  User Logout
const logout = catchAsync(async (req, res, next) => {
  res.cookie('jwt', '', {
    expires: new Date(Date.now() - 10 * 1000),
    httpOnly: true,
  });

  res.status(200).json({ status: 'success' });
});

// @ DESCRIPTION            =>  for currently logged in user to update their own password
const updateMyPassword = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user._id).select('+password');

  const { password, newPassword, passwordConfirm } = req.body;

  // check if current password is correct
  if (!(await user.correctPassword(password, user.password))) {
    return next(new AppError('Invalid current password', 400));
  }

  user.password = newPassword;
  user.passwordConfirm = passwordConfirm;

  await user.save();

  helper.createSendToken(user, 201, req, res);
});

// @ DESCRIPTION            =>  get currently logged in user, based on the JWT cookie
const getCurrentlyLoggedInUser = catchAsync(async (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    return next(new AppError('No logged in user found', 404));
  }

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  let currentUser = await User.findById(decoded.id);

  if (!currentUser) {
    return next(new AppError('User not found!', 404));
  }

  if (currentUser.passwordChangedAfter(decoded.iat)) {
    return next(
      new AppError('User recently changed password! Log in again', 401)
    );
  }

  res.status(200).json({
    status: 'success',
    data: {
      user: currentUser,
    },
  });
});

export {
  login,
  logout,
  protect,
  allowedOnlyTo,
  updateMyPassword,
  getCurrentlyLoggedInUser,
};
