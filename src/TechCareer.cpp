#include "../include/TechCareer.h"

TechCareer::TechCareer(string name,
                       vector<string> skills)
    : Career(name, skills)
{
}

TechCareer::~TechCareer()
{
}

int TechCareer::calculateScore(const User& user)
{
    int score = 0;

    // =========================================
    // SOFTWARE ENGINEER
    // =========================================
    if (careerName == "Software Engineer")
    {
        score =
        (
            user.getSkill("Programming") * 25 +
            user.getSkill("ProblemSolving") * 20 +
            user.getSkill("Algorithms") * 15 +
            user.getSkill("Logic") * 10 +
            user.getSkill("Database") * 10 +
            user.getSkill("Teamwork") * 10 +
            user.getSkill("Math") * 10
        ) / 100;
    }

    // =========================================
    // AI ENGINEER
    // =========================================
    else if (careerName == "AI Engineer")
    {
        score =
        (
            user.getSkill("AI") * 25 +
            user.getSkill("Math") * 20 +
            user.getSkill("Programming") * 15 +
            user.getSkill("Algorithms") * 15 +
            user.getSkill("Logic") * 10 +
            user.getSkill("ProblemSolving") * 10 +
            user.getSkill("Database") * 5
        ) / 100;
    }

    // =========================================
    // DATA SCIENTIST
    // =========================================
    else if (careerName == "Data Scientist")
    {
        score =
        (
            user.getSkill("Math") * 25 +
            user.getSkill("Database") * 20 +
            user.getSkill("Programming") * 15 +
            user.getSkill("AI") * 15 +
            user.getSkill("Logic") * 10 +
            user.getSkill("Algorithms") * 10 +
            user.getSkill("ProblemSolving") * 5
        ) / 100;
    }

    // =========================================
    // CYBERSECURITY ANALYST
    // =========================================
    else if (careerName == "Cybersecurity Analyst")
    {
        score =
        (
            user.getSkill("CyberSecurity") * 30 +
            user.getSkill("Networking") * 20 +
            user.getSkill("Logic") * 15 +
            user.getSkill("ProblemSolving") * 15 +
            user.getSkill("Programming") * 10 +
            user.getSkill("Database") * 5 +
            user.getSkill("Teamwork") * 5
        ) / 100;
    }

    // =========================================
    // CLOUD ENGINEER
    // =========================================
    else if (careerName == "Cloud Engineer")
    {
        score =
        (
            user.getSkill("Networking") * 25 +
            user.getSkill("Programming") * 20 +
            user.getSkill("Database") * 15 +
            user.getSkill("ProblemSolving") * 15 +
            user.getSkill("Logic") * 10 +
            user.getSkill("Teamwork") * 10 +
            user.getSkill("CyberSecurity") * 5
        ) / 100;
    }

    return score;
}