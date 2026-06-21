#ifndef CAREER_H
#define CAREER_H

#include <iostream>
#include <string>
#include <vector>

using namespace std;

class User;

class Career
{
protected:
    string careerName;
    vector<string> requiredSkills;

public:
    Career(string name, vector<string> skills);

    virtual ~Career();

    string getCareerName() const;

    vector<string> getRequiredSkills() const;

    virtual int calculateScore(const User& user) = 0;

    virtual void displayCareerInfo() const;
};

#endif