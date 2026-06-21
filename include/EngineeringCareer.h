#ifndef ENGINEERINGCAREER_H
#define ENGINEERINGCAREER_H

#include "Career.h"
#include "User.h"

class EngineeringCareer : public Career
{
public:
    EngineeringCareer(string name,
                      vector<string> skills);

    ~EngineeringCareer();

    int calculateScore(const User& user) override;
};

#endif