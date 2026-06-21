#ifndef QUESTION_H
#define QUESTION_H

#include <iostream>
#include <string>
#include <vector>

using namespace std;

class Question
{
private:
    string questionText;
    vector<string> options;
    string relatedSkill;

public:
    Question();

    Question(string text,
             vector<string> opts,
             string skill);

    ~Question();

    void displayQuestion() const;

    int askQuestion() const;

    string getRelatedSkill() const;
};

#endif