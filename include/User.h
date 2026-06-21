#ifndef USER_H
#define USER_H

#include <iostream>
#include <string>
#include <map>

using namespace std;

class User
{
private:

    string name;
    string password;

    map<string, int> skills;

public:

    User();

    User(string n, string p);

    ~User();

    void setName(string n);

    void setPassword(string p);

    string getName() const;

    string getPassword() const;

    // Skill Functions
    void setSkill(string skill, int value);

    int getSkill(string skill) const;

    void displayProfile() const;
};

#endif