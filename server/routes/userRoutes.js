import express from 'express';

import * as userController from './../controllers/userController.js';
import * as authController from './../controllers/authController.js';

const router = express.Router();

router
  .route('/')
  .post(userController.createUser)
  .get(authController.protect, userController.getAllUsers);

router.use(authController.protect, authController.allowedOnlyTo('admin'));

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deactivateUser);

export { router as userRouter };
