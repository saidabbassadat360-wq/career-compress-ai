import jwt from 'jsonwebtoken';
import User from '../models/User.model.js';

export const protect = async (req, res, next) => {
  let token;

  // Check if token exists in the Authorization header and starts with 'Bearer'
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Extract the raw token string
      token = req.headers.authorization.split(' ')[1];

      // Verify the token using our secure secret key
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Fetch the user belonging to this token from the database, leaving out the password
      req.user = await User.findById(decoded.id).select('-password');

      if (!req.user) {
        return res.status(401).json({ success: false, message: 'User matching this token no longer exists.' });
      }

      // Pass control to the next function (the controller)
      return next();
    } catch (error) {
      console.error(`🔒 Auth Middleware Error: ${error.message}`);
      return res.status(401).json({ success: false, message: 'Not authorized, token signature invalid or expired' });
    }
  }

  if (!token) {
    return res.status(401).json({ success: false, message: 'Not authorized, no security token provided' });
  }
};