import express from 'express';
import { getUserProfile, getUserDashboardData } from '../controllers/user.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();

router.use(protect);

router.get('/profile', getUserProfile);
router.get('/dashboard', getUserDashboardData);

export default router;