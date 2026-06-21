#include "../include/User.h"

User::User()
{
    name = "Unknown";
    password = "";
}

User::User(string n, string p)
{
    name = n;
    password = p;
}

User::~User()
{
}

void User::setName(string n)
{
    name = n;
}

void User::setPassword(string p)
{
    password = p;
}

string User::getName() const
{
    return name;
}

string User::getPassword() const
{
    return password;
}

void User::setSkill(string skill, int value)
{
    skills[skill] = value;
}

int User::getSkill(string skill) const
{
    auto it = skills.find(skill);

    if (it != skills.end())
    {
        return it->second;
    }

    return 0;
}

void User::displayProfile() const
{
    cout << "\n=====================================\n";
    cout << "          USER PROFILE\n";
    cout << "=====================================\n";

    cout << "Name : " << name << endl;

    cout << "\nSkill Scores:\n";

    for (auto skill : skills)
    {
        cout << " - "
             << skill.first
             << " : "
             << skill.second
             << "%\n";
    }

    cout << endl;
}