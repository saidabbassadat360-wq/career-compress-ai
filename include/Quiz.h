#ifndef QUIZ_H
#define QUIZ_H

#include <string>
#include "User.h"

using namespace std;

class Quiz
{
private:

    string domain;

public:

    Quiz();

    void chooseDomain();

    void startQuiz(User& user);

    string getDomain() const;
};

#endif