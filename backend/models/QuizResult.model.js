import mongoose from 'mongoose';

const quizResultSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ['IT/Software', 'Business', 'Creative', 'Medical', 'Engineering'],
    },
    answers: [
      {
        questionIndex: { type: Number, required: true },
        question: { type: String, required: true },
        answer: { type: Number, required: true, min: 1, max: 5 },
        label: { 
          type: String, 
          required: true, 
          enum: ['Low', 'Fair', 'Good', 'Very Good', 'Excellent'] 
        },
      },
    ],
    skillScores: {
      type: Map,
      of: Number,
      required: true,
    },
    careerMatches: [
      {
        career: { type: String, required: true },
        percentage: { type: Number, required: true },
      },
    ],
    topCareer: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

quizResultSchema.index({ user: 1, category: 1 }, { unique: true });

const QuizResult = mongoose.model('QuizResult', quizResultSchema);
export default QuizResult;