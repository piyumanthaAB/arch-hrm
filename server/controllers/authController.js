import AppError from '../utils/AppError.js';
import catchAsync from '../utils/catchAsync.js';
import User from '../models/userModel.js';
import * as helper from './../utils/helpers.js';

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

export { login, logout };
