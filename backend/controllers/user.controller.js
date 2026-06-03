import User from '../models/User.model.js';
import QuizResult from '../models/QuizResult.model.js';

// @desc    Get logged-in user profile metrics
// @route   GET /api/user/profile
export const getUserProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User account not found.' });
    }
    res.json({ success: true, data: user });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all historical career assessment metrics for dashboard
// @route   GET /api/user/dashboard
export const getUserDashboardData = async (req, res, next) => {
  try {
    const records = await QuizResult.find({ user: req.user._id }).sort({ updatedAt: -1 });
    const completedCategories = records.map(r => r.category);
    const primaryRecommendation = records.length > 0 ? records[0].topCareer : 'None';

    res.json({
      success: true,
      metrics: {
        completedCount: records.length,
        completedCategories,
        primaryRecommendation
      },
      history: records
    });
  } catch (error) {
    next(error);
  }
};