import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Gemini AI SDK safely
const getGeminiClient = () => {
  if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY.startsWith('AIzaSyYour')) {
    console.warn('⚠️ Warning: Valid GEMINI_API_KEY not found in .env. Using fallback quiz questions.');
    return null;
  }
  try {
    return new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  } catch (error) {
    console.error('❌ Failed to initialize Gemini Client:', error.message);
    return null;
  }
};

// Complete 10-Question Master Fallbacks synchronized to your new 25 careers
const fallbackQuestions = {
  'IT/Software': [
    { index: 1, question: 'How much do you enjoy writing logic, optimizing backend algorithms, and solving coding puzzles?', skill: 'Logic & Coding' },
    { index: 2, question: 'How comfortable are you managing cloud infrastructure, deployment channels, and servers?', skill: 'Infrastructure' },
    { index: 3, question: 'How interested are you in designing interactive user interfaces, visual wireframes, and CSS layouts?', skill: 'Frontend' },
    { index: 4, question: 'How much do you enjoy reading complex datasets, data warehousing, and structuring SQL/NoSQL databases?', skill: 'Data Systems' },
    { index: 5, question: 'How passionate are you about computer network security, firewalls, and patching software loopholes?', skill: 'Cybersecurity' },
    { index: 6, question: 'How much do you like setting up automated deployment pipelines and maintaining system networks?', skill: 'Infrastructure' },
    { index: 7, question: 'How comfortable are you writing complex backend routing structures and server logic?', skill: 'Logic & Coding' },
    { index: 8, question: 'How interested are you in building user-centered web prototypes and application styling?', skill: 'Frontend' },
    { index: 9, question: 'How much do you like optimizing big data queries and analytical pipeline algorithms?', skill: 'Data Systems' },
    { index: 10, question: 'How closely do you monitor modern digital threat intelligence updates and system access controls?', skill: 'Cybersecurity' }
  ],
  'Business': [
    { index: 1, question: 'How confident are you coordinating project scopes, timelines, and cross-functional teams?', skill: 'Management' },
    { index: 2, question: 'How deeply do you enjoy analyzing financial statements, investment data, and capital profit margins?', skill: 'Finance' },
    { index: 3, question: 'How much do you enjoy pitching professional solutions, making presentations, and negotiating client contracts?', skill: 'Sales' },
    { index: 4, question: 'How interested are you in planning corporate market positioning, consumer data behavior, and ad campaigns?', skill: 'Marketing' },
    { index: 5, question: 'How comfortable are you reviewing internal corporate operations, PESTEL frameworks, and high-level strategy?', skill: 'Strategy' },
    { index: 6, question: 'How naturally do you lead team members and manage tasks toward meeting collection targets?', skill: 'Management' },
    { index: 7, question: 'How detail-oriented are you when tracking budget allocations and corporate sheet metrics?', skill: 'Finance' },
    { index: 8, question: 'How easily can you influence a corporate buyer’s perspective during a commercial deal?', skill: 'Sales' },
    { index: 9, question: 'How closely do you evaluate brand performance and target audience tracking graphs?', skill: 'Marketing' },
    { index: 10, question: 'How much do you enjoy conducting strategic business research to identify long-term growth opportunities?', skill: 'Strategy' }
  ],
  'Creative': [
    { index: 1, question: 'How much do you enjoy composing visual art, digital branding assets, and layout aesthetics?', skill: 'Visual Design' },
    { index: 2, question: 'How passionate are you about copywriting, narrative script writing, and digital communications?', skill: 'Writing' },
    { index: 3, question: 'How interested are you in editing video frames, color grading, and handling post-production timelines?', skill: 'Video Production' },
    { index: 4, question: 'How comfortable are you organizing 3D wireframe models, rigging objects, or staging motion assets?', skill: 'Animation' },
    { index: 5, question: 'How naturally do you direct complete creative concepts, content strategies, and artistic styles?', skill: 'Art Direction' },
    { index: 6, question: 'How much time do you spend refining interface prototype flows, wireframes, and user experiences?', skill: 'Visual Design' },
    { index: 7, question: 'How easily can you express structural themes or content messages through written words?', skill: 'Writing' },
    { index: 8, question: 'How much do you enjoy syncing visual clips to audio beats in a multi-track timeline editor?', skill: 'Video Production' },
    { index: 9, question: 'How interested are you in keyframe design, character animation dynamics, and 3D rendering?', skill: 'Animation' },
    { index: 10, question: 'How confidently can you evaluate the brand consistency and UI usability of an active app product?', skill: 'Art Direction' }
  ],
  'Medical': [
    { index: 1, question: 'How comfortable are you diagnosing clinical conditions, analyzing symptoms, and determining therapeutic paths?', skill: 'Clinical Practice' },
    { index: 2, question: 'How much do you enjoy providing direct clinical support, monitoring patient vitals, and administering care plans?', skill: 'Patient Care' },
    { index: 3, question: 'How passionate are you about safety-checking pharmaceutical profiles, drug cross-actions, and biochemical effects?', skill: 'Pharmacology' },
    { index: 4, question: 'How interested are you in evaluating muscle recovery paths, motor skill tracking, and exercise therapies?', skill: 'Rehabilitation' },
    { index: 5, question: 'How closely do you track healthcare operational metrics, hygiene standards, and public health conditions?', skill: 'Public Health' },
    { index: 6, question: 'How calmly can you make high-stakes operational choices under emergency surgical or clinical stress?', skill: 'Clinical Practice' },
    { index: 7, question: 'How naturally do you connect with individuals while tending to physical injuries or illness support?', skill: 'Patient Care' },
    { index: 8, question: 'How thoroughly do you evaluate medical prescriptions, compound logs, and biochemical dosages?', skill: 'Pharmacology' },
    { index: 9, question: 'How rewarding do you find assisting patients through physical rehabilitation treatment cycles?', skill: 'Rehabilitation' },
    { index: 10, question: 'How interested are you in optimizing clinic resource logistics, health awareness campaigns, and general wellness tracking?', skill: 'Public Health' }
  ],
  'Engineering': [
    { index: 1, question: 'How interested are you in structural mechanics, load distributions, and foundation blueprint analysis?', skill: 'Civil' },
    { index: 2, question: 'How much do you enjoy designing motor mechanisms, CAD assemblies, and fluid dynamic machinery?', skill: 'Mechanical' },
    { index: 3, question: 'How comfortable are you mapping microchip circuitry, electrical infrastructure, and voltage flows?', skill: 'Electrical' },
    { index: 4, question: 'How passionate are you about analyzing subsurface reservoir lines, field pressures, and fluid extractions?', skill: 'Petroleum' },
    { index: 5, question: 'How interested are you in writing microcontroller logic, inverse kinematics, and robotic movement loops?', skill: 'Robotics' },
    { index: 6, question: 'How easily can you interpret blueprinted isometric layouts for structural infrastructure works?', skill: 'Civil' },
    { index: 7, question: 'How much do you enjoy simulating thermal engines, stress capacities, and physical manufacturing assemblies?', skill: 'Mechanical' },
    { index: 8, question: 'How systematically can you trace short-circuits across automated hardware circuit boards?', skill: 'Electrical' },
    { index: 9, question: 'How deeply do you care about energy refinery safety configurations and flow network parameters?', skill: 'Petroleum' },
    { index: 10, question: 'How excited are you to configure machine vision loops, motor-drivers, and automated systems?', skill: 'Robotics' }
  ]
};

export const generateQuestionsFromAI = async (category) => {
  const ai = getGeminiClient();
  
  if (!ai) {
    return fallbackQuestions[category];
  }

  try {
    const model = ai.getGenerativeModel({ model: 'gemini-1.5-flash' });
    
    // Define the exact 5 careers per category for Gemini to reference cleanly
    const mappingReferences = {
      'IT/Software': 'Software Engineer, AI & Machine Learning Engineer, Cybersecurity Analyst, Data Scientist, Cloud & DevOps Engineer',
      'Business': 'Project Manager, Financial Analyst, Business Consultant, Marketing Strategist, Sales Executive',
      'Creative': 'UI/UX Designer, Graphic Designer, Animator & 3D Artist, Video Production Specialist, Content Strategist',
      'Medical': 'Doctor, Surgeon, Nurse, Pharmacist, Physiotherapist',
      'Engineering': 'Mechanical Engineer, Electrical Engineer, Civil Engineer, Petroleum Engineer, Aerospace Engineer'
    };

    const targetCareers = mappingReferences[category] || '';

    const prompt = `
      You are an expert career evaluation advisor. Generate exactly 10 distinct, diagnostic assessment questions for a student analyzing their vocational affinity for the "${category}" sector.
      
      CRITICAL INSTRUCTION: Your 10 questions must thoroughly and comprehensively evaluate interest across these 5 exact target careers: [ ${targetCareers} ].
      Each question can target a specific career, or naturally overlap across 2 to 3 related paths (e.g., a question about system design might evaluate both Software Engineering and Cloud Systems).
      
      For each object, map the question to one of these exact scoring skill labels based on the category:
      - If IT/Software, use: 'Logic & Coding', 'Infrastructure', 'Frontend', 'Data Systems', or 'Cybersecurity'
      - If Business, use: 'Management', 'Finance', 'Sales', 'Marketing', or 'Strategy'
      - If Creative, use: 'Visual Design', 'Writing', 'Video Production', 'Animation', or 'Art Direction'
      - If Medical, use: 'Clinical Practice', 'Patient Care', 'Pharmacology', 'Rehabilitation', or 'Public Health'
      - If Engineering, use: 'Mechanical', 'Electrical', 'Civil', 'Petroleum', or 'Robotics'

      Return ONLY a clean JSON array containing exactly 10 objects matching this precise schema formatting. Do not include markdown wraps or backticks:
      [
        {"index": 1, "question": "Question text evaluating professional traits here?", "skill": "ExactSkillLabel"}
      ]
    `;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text().trim();
    const cleanJSON = responseText.replace(/^```json/i, '').replace(/```$/, '').trim();
    return JSON.parse(cleanJSON);
    
  } catch (error) {
    console.error(`🤖 Gemini API failed, using synchronized fallbacks: ${error.message}`);
    return fallbackQuestions[category];
  }
};