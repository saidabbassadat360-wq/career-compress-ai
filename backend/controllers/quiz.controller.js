import { generateQuestionsFromAI } from '../utils/geminiClient.js';
import { calculateScoresAndMatches } from '../utils/scoring.js';
import QuizResult from '../models/QuizResult.model.js';

// @desc    Fetch questions for a chosen career category
// @route   GET /api/quiz/questions/:category
export const getQuizQuestions = async (req, res, next) => {
  const { category } = req.params;
  
  // Matched exactly to the clean layout array formatting on the frontend
  const validCategories = ['IT/Software', 'Business', 'Creative', 'Medical', 'Engineering'];

  try {
    if (!validCategories.includes(category)) {
      return res.status(400).json({ success: false, message: 'Invalid career category parameter provided.' });
    }

    const questions = await generateQuestionsFromAI(category);
    res.json({ success: true, category, questions });
  } catch (error) {
    next(error);
  }
};

// @desc    Process quiz answers and upsert results tracking
// @route   POST /api/quiz/submit
export const submitQuizAnswers = async (req, res, next) => {
  const { category, answers } = req.body;

  try {
    if (!category || !answers || !Array.isArray(answers)) {
      return res.status(400).json({ success: false, message: 'Incomplete or malformed quiz payload.' });
    }

    // Map numeric scores (1-5) to string labels matching the Mongoose Schema Enum
    const labelMapping = {
      1: 'Low',
      2: 'Fair',
      3: 'Good',
      4: 'Very Good',
      5: 'Excellent'
    };

    // Always fetch base questions blueprint to prevent user answer falsification
    const originalQuestions = await generateQuestionsFromAI(category);

    const formattedAnswers = answers.map((ans) => {
      const questionBlueprint = originalQuestions.find(q => q.index === ans.questionIndex);
      return {
        questionIndex: ans.questionIndex,
        question: questionBlueprint ? questionBlueprint.question : 'Diagnostic Skill Assessment Question',
        answer: ans.answer,
        label: labelMapping[ans.answer] || 'Good'
      };
    });

    // Compute skill matrices and percentages using our utility calculation module
    const { skillScores, careerMatches, topCareer } = calculateScoresAndMatches(
      category, 
      answers, 
      originalQuestions
    );

    // Securely upsert record to database: update if exists, insert if new
    const savedResult = await QuizResult.findOneAndUpdate(
      { user: req.user._id, category },
      {
        user: req.user._id,
        category,
        answers: formattedAnswers,
        skillScores,
        careerMatches,
        topCareer
      },
      { new: true, upsert: true }
    );

    res.status(200).json({
      success: true,
      data: savedResult
    });
  } catch (error) {
    next(error);
  }
};