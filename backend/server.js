import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import { errorHandler } from './middleware/error.middleware.js';

// Import Route Handlers
import authRoutes from './routes/auth.routes.js';
import quizRoutes from './routes/quiz.routes.js';
import userRoutes from './routes/user.routes.js';

// 1. Load system environment variables from configuration sheet
dotenv.config();

// 2. Establish a secure handshake link to MongoDB Atlas
connectDB();

const app = express();

// 3. Configure Network Security Rules (CORS)

app.use(cors({
  origin: true,
  credentials: true
}));



// 4. Mount Request Parsers Middleware
app.use(express.json()); // Allows the application to read incoming JSON data maps
app.use(express.urlencoded({ extended: true }));

// 5. Mount Base Diagnostic API Channels
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    success: true, 
    message: '🚀 CareerCompass AI Server Core is operational and healthy.' 
  });
});

// 6. Bind Application Functional Route Systems
app.use('/api/auth', authRoutes);
app.use('/api/quiz', quizRoutes);
app.use('/api/user', userRoutes);

// 7. Route Fallback - Handle request routes that do not exist
app.use((req, res, next) => {
  res.status(404).json({ 
    success: false, 
    message: `Resource tracking mismatch: Requested URL path [${req.originalUrl}] does not exist.` 
  });
});

// 8. Bind the Global Operational Safety Error Filter Guard
app.use(errorHandler);

// 9. Launch Server Listening Engine Channel
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`
  ======================================================
  🔥 CareerCompass AI Production Engine is officially LIVE!
  🖥️  Server listening channel active on Port: [${PORT}]
  🌐 Access Health check: http://localhost:${PORT}/api/health
  ======================================================
  `);
});

// Handle unhandled promise rejections outside local scopes (e.g., bad server setups)
process.on('unhandledRejection', (err) => {
  console.error(`🚨 Critical Exception Failure: ${err.message}`);
  // Safely close the server listener channels before stopping the app process
  server.close(() => process.exit(1));
});