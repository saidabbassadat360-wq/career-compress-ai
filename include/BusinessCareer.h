#ifndef BUSINESSCAREER_H
#define BUSINESSCAREER_H

#include "Career.h"
#include "User.h"

class BusinessCareer : public Career
{
public:
    BusinessCareer(string name, vector<string> skills);

    ~BusinessCareer();

    int calculateScore(const User& user) override;
};

#endif