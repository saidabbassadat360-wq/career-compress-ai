#include "../include/CreativeCareer.h"

CreativeCareer::CreativeCareer(string name,
                               vector<string> skills)
    : Career(name, skills)
{
}

CreativeCareer::~CreativeCareer()
{
}

int CreativeCareer::calculateScore(const User& user)
{
    int score = 0;

    // =========================================
    // UI/UX DESIGNER
    // =========================================
    if (careerName == "UI/UX Designer")
    {
        score =
        (
            user.getSkill("Design") * 25 +
            user.getSkill("Visualization") * 20 +
            user.getSkill("Creativity") * 15 +
            user.getSkill("Storytelling") * 10 +
            user.getSkill("Branding") * 10 +
            user.getSkill("Innovation") * 10 +
            user.getSkill("Teamwork") * 10
        ) / 100;
    }

    // =========================================
    // GRAPHIC DESIGNER
    // =========================================
    else if (careerName == "Graphic Designer")
    {
        score =
        (
            user.getSkill("Design") * 25 +
            user.getSkill("Creativity") * 20 +
            user.getSkill("Drawing") * 15 +
            user.getSkill("Branding") * 15 +
            user.getSkill("Visualization") * 10 +
            user.getSkill("Photography") * 10 +
            user.getSkill("Innovation") * 5
        ) / 100;
    }

    // =========================================
    // ANIMATOR
    // =========================================
    else if (careerName == "Animator")
    {
        score =
        (
            user.getSkill("Animation") * 30 +
            user.getSkill("Visualization") * 20 +
            user.getSkill("Drawing") * 15 +
            user.getSkill("Creativity") * 15 +
            user.getSkill("Design") * 10 +
            user.getSkill("Storytelling") * 10
        ) / 100;
    }

    // =========================================
    // CONTENT CREATOR
    // =========================================
    else if (careerName == "Content Creator")
    {
        score =
        (
            user.getSkill("Storytelling") * 25 +
            user.getSkill("Creativity") * 20 +
            user.getSkill("Branding") * 15 +
            user.getSkill("Photography") * 15 +
            user.getSkill("Innovation") * 10 +
            user.getSkill("Teamwork") * 10 +
            user.getSkill("Visualization") * 5
        ) / 100;
    }

    // =========================================
    // DIGITAL ARTIST
    // =========================================
    else if (careerName == "Digital Artist")
    {
        score =
        (
            user.getSkill("Drawing") * 25 +
            user.getSkill("Creativity") * 20 +
            user.getSkill("Design") * 15 +
            user.getSkill("Visualization") * 15 +
            user.getSkill("Animation") * 10 +
            user.getSkill("Photography") * 10 +
            user.getSkill("Innovation") * 5
        ) / 100;
    }

    return score;
}