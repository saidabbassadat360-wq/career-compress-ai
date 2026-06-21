#include "../include/BusinessCareer.h"

BusinessCareer::BusinessCareer(string name,
                               vector<string> skills)
    : Career(name, skills)
{
}

BusinessCareer::~BusinessCareer()
{
}

int BusinessCareer::calculateScore(const User& user)
{
    int score = 0;

    // =========================================
    // BUSINESS MANAGER
    // =========================================
    if (careerName == "Business Manager")
    {
        score =
        (
            user.getSkill("Leadership") * 25 +
            user.getSkill("DecisionMaking") * 20 +
            user.getSkill("Communication") * 15 +
            user.getSkill("Finance") * 10 +
            user.getSkill("Negotiation") * 10 +
            user.getSkill("StrategicThinking") * 10 +
            user.getSkill("Teamwork") * 10
        ) / 100;
    }

    // =========================================
    // MARKETING MANAGER
    // =========================================
    else if (careerName == "Marketing Manager")
    {
        score =
        (
            user.getSkill("Marketing") * 25 +
            user.getSkill("Communication") * 20 +
            user.getSkill("Creativity") * 15 +
            user.getSkill("Leadership") * 10 +
            user.getSkill("Negotiation") * 10 +
            user.getSkill("StrategicThinking") * 10 +
            user.getSkill("Teamwork") * 10
        ) / 100;
    }

    // =========================================
    // FINANCIAL ANALYST
    // =========================================
    else if (careerName == "Financial Analyst")
    {
        score =
        (
            user.getSkill("Finance") * 30 +
            user.getSkill("AnalyticalThinking") * 20 +
            user.getSkill("DecisionMaking") * 15 +
            user.getSkill("RiskManagement") * 15 +
            user.getSkill("StrategicThinking") * 10 +
            user.getSkill("Communication") * 10
        ) / 100;
    }

    // =========================================
    // ENTREPRENEUR
    // =========================================
    else if (careerName == "Entrepreneur")
    {
        score =
        (
            user.getSkill("Leadership") * 20 +
            user.getSkill("DecisionMaking") * 20 +
            user.getSkill("StrategicThinking") * 15 +
            user.getSkill("Innovation") * 15 +
            user.getSkill("Finance") * 10 +
            user.getSkill("Negotiation") * 10 +
            user.getSkill("Communication") * 10
        ) / 100;
    }

    // =========================================
    // HR MANAGER
    // =========================================
    else if (careerName == "HR Manager")
    {
        score =
        (
            user.getSkill("Communication") * 25 +
            user.getSkill("Leadership") * 20 +
            user.getSkill("Teamwork") * 15 +
            user.getSkill("Negotiation") * 15 +
            user.getSkill("DecisionMaking") * 10 +
            user.getSkill("StrategicThinking") * 10 +
            user.getSkill("Finance") * 5
        ) / 100;
    }

    return score;
}