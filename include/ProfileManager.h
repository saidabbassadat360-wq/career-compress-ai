#ifndef PROFILEMANAGER_H
#define PROFILEMANAGER_H

#include <iostream>
#include <fstream>
#include <string>

#include "User.h"

using namespace std;

class ProfileManager
{
public:
    ProfileManager();

    ~ProfileManager();

    bool registerUser(User& user);

    bool loginUser(User& user);

    void saveUserData(const User& user);

    bool loadUserData(User& user, string name);

private:
    const string profileFilePath = "data/profiles.txt";
};

#endif