import express from 'express';

import * as userController from './../controllers/userController.js';
import * as authController from './../controllers/authController.js';

const router = express.Router();

router
  .route('/filter')
  .get(
    authController.protect,
    authController.allowedOnlyTo('admin'),
    userController.getUserByUIDroName
  );

router
  .route('/delete-many')
  .delete(
    authController.protect,
    authController.allowedOnlyTo('admin'),
    userController.deleteManyUsersById
  );

router
  .route('/')
  .post(
    userController.createBlobContainer,
    userController.uploadImages,
    userController.createUser
  )
  .get(authController.protect, userController.getAllUsers);

router.use(authController.protect, authController.allowedOnlyTo('admin'));

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deactivateUser);

export { router as userRouter };
