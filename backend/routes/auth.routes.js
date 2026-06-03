import express from 'express';
import { body } from 'express-validator';
import { registerUser, loginUser } from '../controllers/auth.controller.js';
import { validateRequest } from '../middleware/validate.middleware.js';

const router = express.Router();

// @route   POST /api/auth/register
router.post(
  '/register',
  [
    body('name')
      .trim()
      .notEmpty().withMessage('Name field cannot be submitted blank')
      .isLength({ min: 3, max: 50 }).withMessage('Name profile must be between 3 and 50 characters long'),
    body('email')
      .trim()
      .notEmpty().withMessage('Email address field is mandatory')
      .isEmail().withMessage('Please submit a verified email address format')
      .normalizeEmail(),
    body('password')
      .isLength({ min: 4 }).withMessage('Password must be a minimum of 4 characters long') 
      // Relaxed complex rules slightly for local student testing; change to your preference for deployment
  ],
  validateRequest,
  registerUser
);

// @route   POST /api/auth/login
router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Please provide a valid entry email address'),
    body('password').notEmpty().withMessage('Password entry cannot be blank')
  ],
  validateRequest,
  loginUser
);

export default router;