#include "../include/MedicalCareer.h"

MedicalCareer::MedicalCareer(string name,
                             vector<string> skills)
    : Career(name, skills)
{
}

MedicalCareer::~MedicalCareer()
{
}

int MedicalCareer::calculateScore(const User& user)
{
    int score = 0;

    // =========================================
    // DOCTOR
    // =========================================
    if (careerName == "Doctor")
    {
        score =
        (
            user.getSkill("Biology") * 20 +
            user.getSkill("Diagnosis") * 20 +
            user.getSkill("Communication") * 15 +
            user.getSkill("Empathy") * 15 +
            user.getSkill("Anatomy") * 10 +
            user.getSkill("Focus") * 10 +
            user.getSkill("Ethics") * 10
        ) / 100;
    }

    // =========================================
    // SURGEON
    // =========================================
    else if (careerName == "Surgeon")
    {
        score =
        (
            user.getSkill("Focus") * 25 +
            user.getSkill("Anatomy") * 20 +
            user.getSkill("Diagnosis") * 15 +
            user.getSkill("Biology") * 15 +
            user.getSkill("Patience") * 10 +
            user.getSkill("Teamwork") * 10 +
            user.getSkill("Ethics") * 5
        ) / 100;
    }

    // =========================================
    // PHARMACIST
    // =========================================
    else if (careerName == "Pharmacist")
    {
        score =
        (
            user.getSkill("Biology") * 25 +
            user.getSkill("Research") * 20 +
            user.getSkill("Focus") * 15 +
            user.getSkill("Communication") * 10 +
            user.getSkill("Diagnosis") * 10 +
            user.getSkill("Ethics") * 10 +
            user.getSkill("Patience") * 10
        ) / 100;
    }

    // =========================================
    // PHYSIOTHERAPIST
    // =========================================
    else if (careerName == "Physiotherapist")
    {
        score =
        (
            user.getSkill("Empathy") * 25 +
            user.getSkill("Communication") * 20 +
            user.getSkill("Patience") * 15 +
            user.getSkill("Biology") * 15 +
            user.getSkill("Anatomy") * 10 +
            user.getSkill("Teamwork") * 10 +
            user.getSkill("Ethics") * 5
        ) / 100;
    }

    // =========================================
    // MEDICAL RESEARCHER
    // =========================================
    else if (careerName == "Medical Researcher")
    {
        score =
        (
            user.getSkill("Research") * 30 +
            user.getSkill("Biology") * 20 +
            user.getSkill("Diagnosis") * 15 +
            user.getSkill("Focus") * 15 +
            user.getSkill("Anatomy") * 10 +
            user.getSkill("Ethics") * 10
        ) / 100;
    }

    return score;
}