#ifndef DECISIONENGINE_H
#define DECISIONENGINE_H

#include <iostream>
#include <vector>
#include <map>
#include <string>

#include "Career.h"
#include "User.h"

using namespace std;

class DecisionEngine
{
private:
    vector<Career*> careers;

public:
    DecisionEngine();
    ~DecisionEngine();

    void addCareer(Career* career);

    void generateRecommendations(const User& user);

    void explainCareer(const string& careerName,
                       int score);

    void displayBar(int score);

    // NEW FUNCTIONS
    string getTopCareer(const User& user);

    int getTopCareerScore(const User& user);

    string getCareerRoadmap(const string& careerName);
};

#endif