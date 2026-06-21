import { response } from 'express';
import User from '../models/User.model.js';
import generateToken from '../utils/generateToken.js';

// @desc    Register a new user account
// @route   POST /api/auth/register
export const registerUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ success: false, message: 'This email is already registered.' });
    }

    const user = await User.create({ name, email, password });
    if (user) {
      const token = generateToken(user._id);
      res.status(201).json({
        success: true,
        token,
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
        },
      });
    } else {
      res.status(400).json({ success: false, message: 'Invalid user registration input data.' });
    }
  } catch (error) {
    if (error.name === 'MongoNetworkError' || error.name === 'MongoServerError') {
      res.status(503).json({ 
        success: false, 
        message: 'Database connection issue. Please try again in a few moments.' 
      });
    } else {
      res.status(500).json({ 
        success: false, 
        message: 'Server error during registration.' 
      });
    }
  }
};

// @desc    Authenticate user & get token (Login)
// @route   POST /api/auth/login
export const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email }).select('+password');
    if (user && (await user.matchPassword(password))) {
      const token = generateToken(user._id);
      res.json({
        success: true,
        token,
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
        },
      });
    } else {
      res.status(401).json({ success: false, message: 'Invalid email or password.' });
    }
  } catch (error) {
    if (error.name === 'MongoNetworkError' || error.name === 'MongoServerError') {
      res.status(503).json({ 
        success: false, 
        message: 'Database connection issue. Please try again in a few moments.' 
      });
    } else {
      res.status(500).json({ 
        success: false, 
        message: 'Server error during login.' 
      });
    }
  }
};