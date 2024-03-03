import User from '../models/userModel.js';
import AppError from '../utils/AppError.js';
import catchAsync from '../utils/catchAsync.js';
import multer from 'multer';
import { MulterAzureStorage } from 'multer-azure-blob-storage';
import {
  BlobServiceClient,
  StorageSharedKeyCredential,
} from '@azure/storage-blob';
import dotenv from 'dotenv';
if (process.env.NODE_ENV === 'development') {
  // set the path of the configuration file which stores the environment variables
  dotenv.config({ path: './development.env' });
}

if (process.env.NODE_ENV === 'production') {
  // set the path of the configuration file which stores the environment variables
  dotenv.config({ path: './production.env' });
}

const accountName = process.env.AZURE_BLOB_STORAGE_ACCOUNT_NAME;
const accountKey = process.env.AZURE_BLOB_STORAGE_ACCESS_KEY;

const sharedKeyCredential = new StorageSharedKeyCredential(
  accountName,
  accountKey
);

const blobServiceClient = new BlobServiceClient(
  `https://${accountName}.blob.core.windows.net`,
  sharedKeyCredential
);

const resolveBlobName = (req, res) => {
  return `img_${Date.now()}.jpeg`;
};

const resolveContainerName = (req, res) => {
  return 'users';
};

const azureStorage = new MulterAzureStorage({
  connectionString: `${process.env.AZURE_BLOB_STORAGE_CONNECTION_STRING}`,
  accessKey: `${process.env.AZURE_BLOB_STORAGE_ACCESS_KEY}`,
  accountName: `${process.env.AZURE_BLOB_STORAGE_ACCOUNT_NAME}`,
  containerName: resolveContainerName,
  blobName: resolveBlobName,
  containerAccessLevel: 'blob',
  urlExpirationTime: 60,
});

// to filter out other file types
const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb('not an image', false);
  }
};

//image azure uploader
const uploadAzure = multer({
  storage: azureStorage,
  fileFilter: multerFilter,
});

// ============== MIDDLEWARE STACK START =================

const uploadImages = uploadAzure.fields([{ name: 'photo', maxCount: 1 }]);

const createBlobContainer = catchAsync(async (req, res, next) => {
  // A container name must be a valid DNS name, as it forms part of the unique URI used to address the container or its blobs. Follow these rules when naming a container:

  // Container names can be between 3 and 63 characters long.
  // Container names must start with a letter or number, and can contain only lowercase letters, numbers, and the dash (-) character.
  // Two or more consecutive dash characters aren't permitted in container names.
  // The URI for a container is in this format:

  // https://myaccount.blob.core.windows.net/mycontainer

  const containerName = resolveContainerName();

  // public access at container level

  const options = {
    public_access: 'container',
  };

  const containerClient = blobServiceClient.getContainerClient(containerName);
  const createContainerResponse = await containerClient.createIfNotExists({
    access: 'container',
  });

  console.log(`Container "${containerName}" was created`);

  next();
});

// ============== MIDDLEWARE STACK END =================

// @ DESCRIPTION            =>  Create a new user document
// @ ACCESS                 =>  'admin'
const createUser = catchAsync(async (req, res) => {
  // console.log({ req: req.body });
  const photoUrl = `${req.files.photo[0].url.split('?')[0]}`;

  const newUser = await User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    profilePicture: photoUrl,
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

export {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
  deactivateUser,
  uploadImages,
  createBlobContainer,
};
