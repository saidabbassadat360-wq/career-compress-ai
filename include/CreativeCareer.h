#ifndef CREATIVECAREER_H
#define CREATIVECAREER_H

#include "Career.h"
#include "User.h"

class CreativeCareer : public Career
{
public:
    CreativeCareer(string name, vector<string> skills);

    ~CreativeCareer();

    int calculateScore(const User& user) override;
};

#endif