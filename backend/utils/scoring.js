const careerWeights = {
  'IT/Software': {
    'Software Engineer': { 'Logic & Coding': 0.6, 'Frontend': 0.2, 'Data Systems': 0.2 },
    'AI & Machine Learning Engineer': { 'Logic & Coding': 0.5, 'Data Systems': 0.4, 'Infrastructure': 0.1 },
    'Cybersecurity Analyst': { 'Cybersecurity': 0.7, 'Infrastructure': 0.2, 'Data Systems': 0.1 },
    'Data Scientist': { 'Data Systems': 0.6, 'Logic & Coding': 0.3, 'Infrastructure': 0.1 },
    'Cloud & DevOps Engineer': { 'Infrastructure': 0.6, 'Logic & Coding': 0.3, 'Cybersecurity': 0.1 }
  },
  'Business': {
    'Project Manager': { 'Management': 0.5, 'Strategy': 0.3, 'Sales': 0.2 },
    'Financial Analyst': { 'Finance': 0.7, 'Strategy': 0.2, 'Management': 0.1 },
    'Business Consultant': { 'Strategy': 0.5, 'Management': 0.3, 'Finance': 0.2 },
    'Marketing Strategist': { 'Marketing': 0.6, 'Strategy': 0.3, 'Sales': 0.1 },
    'Sales Executive': { 'Sales': 0.6, 'Marketing': 0.2, 'Management': 0.2 }
  },
  'Creative': {
    'UI/UX Designer': { 'Visual Design': 0.6, 'Art Direction': 0.3, 'Writing': 0.1 },
    'Graphic Designer': { 'Visual Design': 0.6, 'Art Direction': 0.3, 'Animation': 0.1 },
    'Animator & 3D Artist': { 'Animation': 0.6, 'Visual Design': 0.3, 'Video Production': 0.1 },
    'Video Production Specialist': { 'Video Production': 0.6, 'Animation': 0.2, 'Visual Design': 0.2 },
    'Content Strategist': { 'Writing': 0.7, 'Art Direction': 0.2, 'Visual Design': 0.1 }
  },
  'Medical': {
    'Doctor': { 'Clinical Practice': 0.6, 'Patient Care': 0.2, 'Pharmacology': 0.2 },
    'Surgeon': { 'Clinical Practice': 0.7, 'Patient Care': 0.2, 'Pharmacology': 0.1 },
    'Nurse': { 'Patient Care': 0.6, 'Clinical Practice': 0.2, 'Public Health': 0.2 },
    'Pharmacist': { 'Pharmacology': 0.7, 'Clinical Practice': 0.2, 'Patient Care': 0.1 },
    'Physiotherapist': { 'Rehabilitation': 0.6, 'Patient Care': 0.3, 'Clinical Practice': 0.1 }
  },
  'Engineering': {
    'Mechanical Engineer': { 'Mechanical': 0.6, 'Civil': 0.2, 'Electrical': 0.2 },
    'Electrical Engineer': { 'Electrical': 0.6, 'Mechanical': 0.2, 'Robotics': 0.2 },
    'Civil Engineer': { 'Civil': 0.6, 'Mechanical': 0.2, 'Infrastructure': 0.2 },
    'Petroleum Engineer': { 'Petroleum': 0.7, 'Mechanical': 0.2, 'Civil': 0.1 },
    'Aerospace Engineer': { 'Mechanical': 0.5, 'Electrical': 0.3, 'Civil': 0.2 }
  }
};

export const calculateScoresAndMatches = (category, userAnswers, questionBlueprints) => {
  const skillTotals = {};
  const skillCounts = {};

  userAnswers.forEach((ans) => {
    const blueprint = questionBlueprints.find((q) => q.index === ans.questionIndex);
    if (blueprint) {
      const skill = blueprint.skill;
      const scorePercentage = (ans.answer / 5) * 100;
      if (!skillTotals[skill]) {
        skillTotals[skill] = 0;
        skillCounts[skill] = 0;
      }
      skillTotals[skill] += scorePercentage;
      skillCounts[skill] += 1;
    }
  });

  const skillScores = {};
  Object.keys(skillTotals).forEach((skill) => {
    skillScores[skill] = parseFloat((skillTotals[skill] / skillCounts[skill]).toFixed(2));
  });

  const categoryCareers = careerWeights[category];
  const careerMatches = [];

  Object.keys(categoryCareers).forEach((careerName) => {
    const weights = categoryCareers[careerName];
    let calculatedMatch = 0;
    let baseWeightSum = 0;

    Object.keys(weights).forEach((skillName) => {
      const skillScore = skillScores[skillName] || 40;
      const weightMultiplier = weights[skillName];
      calculatedMatch += skillScore * weightMultiplier;
      baseWeightSum += weightMultiplier;
    });

    let finalPercentage = baseWeightSum > 0 ? calculatedMatch / baseWeightSum : 50;
    const microVariance = Math.random() * 1.8 + 0.1;
    finalPercentage = Math.min(100, Math.max(20, finalPercentage + microVariance));

    careerMatches.push({
      career: careerName,
      percentage: parseFloat(finalPercentage.toFixed(2))
    });
  });

  careerMatches.sort((a, b) => b.percentage - a.percentage);
  const topCareer = careerMatches[0].career;

  return { skillScores, careerMatches, topCareer };
};