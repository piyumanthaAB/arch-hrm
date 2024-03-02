import express from 'express';

import * as authController from './../controllers/authController.js';

const router = express.Router();

router.post('/login', authController.login);
router.get('/logout', authController.logout);
router.get('/current-user', authController.getCurrentlyLoggedInUser);

router
  .route('/update-my-password')
  .post(authController.protect, authController.updateMyPassword);

export { router as authRouter };
