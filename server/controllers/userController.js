import User from '../models/userModel.js';
import catchAsync from '../utils/catchAsync.js';

const createUser = catchAsync(async (req, res) => {
  const newUser = await User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    // photo,
    email: req.body.email,
    mobile: req.body.mobile,
    country: req.body.country,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });

  res.status(201).json({
    status: 'success',
    message: 'user profile created successfully!',
    data: { newUser },
  });
});

export { createUser };