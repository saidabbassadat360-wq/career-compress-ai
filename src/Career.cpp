#include "../include/Career.h"

Career::Career(string name, vector<string> skills)
{
    careerName = name;
    requiredSkills = skills;
}

Career::~Career()
{
}

string Career::getCareerName() const
{
    return careerName;
}

vector<string> Career::getRequiredSkills() const
{
    return requiredSkills;
}

void Career::displayCareerInfo() const
{
    cout << "\n=====================================\n";
    cout << " Career Path : " << careerName << endl;
    cout << "=====================================\n";

    cout << "Required Skills:\n";

    for (string skill : requiredSkills)
    {
        cout << " - " << skill << endl;
    }

    cout << endl;
}