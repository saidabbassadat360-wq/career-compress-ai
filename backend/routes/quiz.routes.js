import express from 'express';
import { body } from 'express-validator';
import { getQuizQuestions, submitQuizAnswers } from '../controllers/quiz.controller.js';
import { protect } from '../middleware/auth.middleware.js';
import { validateRequest } from '../middleware/validate.middleware.js';

const router = express.Router();

// Apply authorization gate across all quiz routes to secure metrics
router.use(protect);

// @route   GET /api/quiz/questions/:category
router.get('/questions/:category', getQuizQuestions);

// @route   POST /api/quiz/submit
router.post(
  '/submit',
  [
    body('category')
      .notEmpty().withMessage('Category specification is mandatory')
      .isIn(['IT/Software', 'Business', 'Creative', 'Medical', 'Engineering']).withMessage('Invalid profile industry selection'),
    body('answers')
      .isArray({ min: 10, max: 10 }).withMessage('Quiz matrix mismatch: Submission requires exactly 10 answered components'),
    body('answers.*.questionIndex')
      .isInt({ min: 1, max: 10 }).withMessage('Invalid tracking sequence tracking integer identifier'),
    body('answers.*.answer')
      .isInt({ min: 1, max: 5 }).withMessage('Input metric range out of bounds: Scoring options scale operates from 1 to 5')
  ],
  validateRequest,
  submitQuizAnswers
);

export default router;