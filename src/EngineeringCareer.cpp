#include "../include/EngineeringCareer.h"

EngineeringCareer::EngineeringCareer(
    string name,
    vector<string> skills)
    : Career(name, skills)
{
}

EngineeringCareer::~EngineeringCareer()
{
}

int EngineeringCareer::calculateScore(const User& user)
{
    int score = 0;

    // =========================================
    // CIVIL ENGINEER
    // =========================================
    if (careerName == "Civil Engineer")
    {
        score =
        (
            user.getSkill("Math") * 20 +
            user.getSkill("Design") * 20 +
            user.getSkill("StructuralAnalysis") * 15 +
            user.getSkill("ProjectManagement") * 15 +
            user.getSkill("ProblemSolving") * 10 +
            user.getSkill("Logic") * 10 +
            user.getSkill("Teamwork") * 10
        ) / 100;
    }

    // =========================================
    // MECHANICAL ENGINEER
    // =========================================
    else if (careerName == "Mechanical Engineer")
    {
        score =
        (
            user.getSkill("MechanicalSystems") * 20 +
            user.getSkill("ProblemSolving") * 20 +
            user.getSkill("Math") * 15 +
            user.getSkill("Physics") * 15 +
            user.getSkill("Logic") * 10 +
            user.getSkill("Design") * 10 +
            user.getSkill("CAD") * 10
        ) / 100;
    }

    // =========================================
    // ELECTRICAL ENGINEER
    // =========================================
    else if (careerName == "Electrical Engineer")
    {
        score =
        (
            user.getSkill("ElectricalSystems") * 25 +
            user.getSkill("Math") * 20 +
            user.getSkill("Physics") * 15 +
            user.getSkill("Logic") * 15 +
            user.getSkill("ProblemSolving") * 15 +
            user.getSkill("Innovation") * 10
        ) / 100;
    }

    // =========================================
    // INDUSTRIAL ENGINEER
    // =========================================
    else if (careerName == "Industrial Engineer")
    {
        score =
        (
            user.getSkill("ProjectManagement") * 20 +
            user.getSkill("Logic") * 20 +
            user.getSkill("ProblemSolving") * 15 +
            user.getSkill("Math") * 15 +
            user.getSkill("Teamwork") * 10 +
            user.getSkill("Innovation") * 10 +
            user.getSkill("CAD") * 10
        ) / 100;
    }

    // =========================================
    // ROBOTICS ENGINEER
    // =========================================
    else if (careerName == "Robotics Engineer")
    {
        score =
        (
            user.getSkill("Robotics") * 25 +
            user.getSkill("Programming") * 20 +
            user.getSkill("Math") * 15 +
            user.getSkill("ProblemSolving") * 15 +
            user.getSkill("Logic") * 10 +
            user.getSkill("Innovation") * 10 +
            user.getSkill("CAD") * 5
        ) / 100;
    }

    return score;
}