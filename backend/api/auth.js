import express from 'express';
import { body } from 'express-validator';
import User from '../models/user.js';

const router = express.Router();
router.post(
    '/sign-up',
    [
      body('name').trim().not().isEmpty(),
      body('email').isEmail().withMessage('Please enter a valid email')
          .custom(async (email) => {
            const user = await User.findUser(email);
            if (user?.[0]) {
              return Promise.reject('Email address already exists');
            }
          })
          .normalizeEmail(),
      body('password').trim().isLength({ min: 7 }),
    ],
    authController.signUp,
);

export default router;
