#ifndef TECHCAREER_H
#define TECHCAREER_H

#include "Career.h"
#include "User.h"

class TechCareer : public Career
{
public:
    TechCareer(string name, vector<string> skills);

    ~TechCareer();

    int calculateScore(const User& user) override;
};

#endif