import User from '../models/userModel.js';
import AppError from '../utils/AppError.js';
import catchAsync from '../utils/catchAsync.js';

// @ DESCRIPTION            =>  Create a new user document
// @ ACCESS                 =>  'admin'
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

// @ DESCRIPTION            =>  Get all the users from the collection
// @ ACCESS                 =>  'admin'
const getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    status: 'success',
    length: users.length,
    data: {
      users,
    },
  });
});

// @ DESCRIPTION            =>  Get a user by ID
// @ ACCESS                 =>  'admin'
const getUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findById(id);

  if (!user) {
    return next(new AppError('User not found for this ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      user,
    },
  });
});

// @ DESCRIPTION            =>  update user profile by ID [Passwords  cannot be updated from this !!]
// @ ACCESS                 =>  'admin'
const updateUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  if (req.body.password) {
    return next(new AppError('Cannot update passwords!', 403));
  }

  if (!req.body.active) {
    return next(
      new AppError('Cannot deactivate users from this endpoint!', 403)
    );
  }
  const user = await User.findByIdAndUpdate(
    { _id: id },
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      // photo,
      mobile: req.body.mobile,
      country: req.body.country,
      role: req.body.role,
      active: req.body.active,
    },
    { runValidators: true, new: true }
  );

  if (!user) {
    return next(new AppError('User not found for this ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      user,
    },
  });
});

// @ DESCRIPTION            =>  deactivate user profile by ID
// @ ACCESS                 =>  'admin'
const deactivateUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const user = await User.findByIdAndUpdate(
    { _id: id },
    {
      active: false,
    },
    { runValidators: true, new: true }
  );

  if (!user) {
    return next(new AppError('User not found for this ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {},
  });
});

export { createUser, getAllUsers, getUser, updateUser, deactivateUser };
