#ifndef MEDICALCAREER_H
#define MEDICALCAREER_H

#include "Career.h"
#include "User.h"

class MedicalCareer : public Career
{
public:
    MedicalCareer(string name, vector<string> skills);

    ~MedicalCareer();

    int calculateScore(const User& user) override;
};

#endif