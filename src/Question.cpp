#include "../include/Question.h"

Question::Question()
{
}

Question::Question(string text,
                   vector<string> opts,
                   string skill)
{
    questionText = text;
    options = opts;
    relatedSkill = skill;
}

Question::~Question()
{
}

void Question::displayQuestion() const
{
    cout << "\n=====================================\n";
    cout << questionText << endl;
    cout << "=====================================\n";

    for (int i = 0; i < options.size(); i++)
    {
        cout << i + 1 << ". " << options[i] << endl;
    }
}

int Question::askQuestion() const
{
    int choice;

    displayQuestion();

    cout << "\nEnter your choice (1-5): ";
    cin >> choice;

    while (choice < 1 || choice > 5)
    {
        cout << "Invalid choice. Try again: ";
        cin >> choice;
    }

    return choice * 2;
}

string Question::getRelatedSkill() const
{
    return relatedSkill;
}