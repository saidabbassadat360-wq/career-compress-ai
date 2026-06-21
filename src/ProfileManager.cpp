#include "../include/ProfileManager.h"
#include <filesystem>
#include <limits>

static bool ensureDataPath(const std::string& profileFilePath)
{
    std::filesystem::path path(profileFilePath);
    auto dir = path.parent_path();

    if (!dir.empty() && !std::filesystem::exists(dir))
    {
        std::error_code ec;
        if (!std::filesystem::create_directories(dir, ec) && ec)
        {
            std::cout << "\nError creating data directory: " << ec.message() << "\n";
            return false;
        }
    }

    if (!std::filesystem::exists(path))
    {
        std::ofstream createFile(profileFilePath);
        if (!createFile.is_open())
        {
            std::cout << "\nError creating profiles file: " << profileFilePath << "\n";
            return false;
        }
    }

    return true;
}

ProfileManager::ProfileManager()
{
    ensureDataPath(profileFilePath);
}

ProfileManager::~ProfileManager()
{
}

bool ProfileManager::registerUser(User& user)
{
    string name, password;

    cout << "\n===== REGISTER =====\n";

    cout << "Enter username: ";
    getline(cin >> ws, name);

    cout << "Enter password: ";
    getline(cin, password);

    // Check if username already exists
    User temp;
    if (loadUserData(temp, name))
    {
        cout << "\nUsername already exists!\n";
        return false;
    }
    if (!ensureDataPath(profileFilePath))
    {
        cout << "\nCannot access user data storage. Please check file permissions.\n";
        return false;
    }

    ifstream file(profileFilePath);
    if (!file.is_open())
    {
        cout << "\nError opening profiles file for reading.\n";
        return false;
    }

    string n, p;

    while (getline(file, n, ',') &&
           getline(file, p))
    {
        if (p == password)
        {
            cout << "\nPassword already exists! Please choose another password.\n";
            file.close();
            return false;
        }
    }
    file.close();

    user.setName(name);
    user.setPassword(password);

    saveUserData(user);

    cout << "\nRegistration successful!\n";

    return true;
}

bool ProfileManager::loginUser(User& user)
{
    string name, password;

    cout << "\n===== LOGIN =====\n";

    cout << "Enter username: ";
    getline(cin >> ws, name);

    cout << "Enter password: ";
    getline(cin, password);

    User temp;

    if (!loadUserData(temp, name))
    {
        cout << "\nUser not found!\n";
        return false;
    }

    if (temp.getPassword() == password)
    {
        user = temp;

        cout << "\nLogin successful!\n";
        return true;
    }

    cout << "\nIncorrect password!\n";
    return false;
}

void ProfileManager::saveUserData(const User& user)
{
    if (!ensureDataPath(profileFilePath))
    {
        cout << "\nCannot access user data storage. Please check file permissions.\n";
        return;
    }

    ofstream file(profileFilePath, ios::app);

    if (!file.is_open())
    {
        cout << "\nError opening profiles file for writing.\n";
        return;
    }

    file << user.getName()
         << ","
         << user.getPassword()
         << endl;

    file.close();
}

bool ProfileManager::loadUserData(User& user, string name)
{
    if (!ensureDataPath(profileFilePath))
    {
        cout << "\nCannot access user data storage. Please check file permissions.\n";
        return false;
    }

    ifstream file(profileFilePath);

    if (!file.is_open())
    {
        return false;
    }

    string n, p;

    while (getline(file, n, ',') &&
           getline(file, p))
    {
        if (n == name)
        {
            user.setName(n);
            user.setPassword(p);

            file.close();
            return true;
        }
    }

    file.close();
    return false;
}