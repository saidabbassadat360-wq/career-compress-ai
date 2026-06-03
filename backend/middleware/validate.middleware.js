import { validationResult } from 'express-validator';

export const validateRequest = (req, res, next) => {
  // Extract validation errors collected by express-validator rules
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    // Collect the first error message to present cleanly to the frontend toast
    const firstErrorMessage = errors.array()[0].msg;
    
    return res.status(400).json({
      success: false,
      message: firstErrorMessage,
      errors: errors.array()
    });
  }
  
  // No validation errors found, proceed safely
  next();
};