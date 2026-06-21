#include <iostream>

#include "../include/User.h"
#include "../include/Quiz.h"
#include "../include/DecisionEngine.h"
#include "../include/ProfileManager.h"

#include "../include/TechCareer.h"
#include "../include/CreativeCareer.h"
#include "../include/BusinessCareer.h"
#include "../include/MedicalCareer.h"
#include "../include/EngineeringCareer.h"

using namespace std;

void showMenu()
{
    cout << "\n=====================================\n";
    cout << "     AI CAREER RECOMMENDER SYSTEM\n";
    cout << "=====================================\n";
    cout << "1. Register\n";
    cout << "2. Login\n";
    cout << "3. Exit\n";
    cout << "=====================================\n";
    cout << "Enter Choice -----> ";
}

void showMainMenu()
{
    cout << "\n=====================================\n";
    cout << "        MAIN DASHBOARD\n";
    cout << "=====================================\n";
    cout << "1. Take Career Quiz\n";
    cout << "2. View Career Recommendations\n";
    cout << "3. View Profile\n";
    cout << "4. Logout\n";
    cout << "=====================================\n";
    cout << "Enter Choice: ";
}

int main()
{
    User user;
    ProfileManager pm;
    Quiz quiz;
    DecisionEngine engine;

    // =====================================================
    // IT CAREERS
    // =====================================================

    engine.addCareer(new TechCareer(
        "Software Engineer",
        {"Programming","Logic","ProblemSolving","Algorithms","Database"}));

    engine.addCareer(new TechCareer(
        "AI Engineer",
        {"AI","Math","Programming","Logic","Algorithms"}));

    engine.addCareer(new TechCareer(
        "Data Scientist",
        {"Math","Programming","Database","AI","Algorithms"}));

    engine.addCareer(new TechCareer(
        "Cybersecurity Analyst",
        {"CyberSecurity","Networking","Logic","ProblemSolving"}));

    engine.addCareer(new TechCareer(
        "Cloud Engineer",
        {"Networking","Database","Programming","Teamwork"}));

    // =====================================================
    // BUSINESS CAREERS
    // =====================================================

    engine.addCareer(new BusinessCareer(
        "Business Manager",
        {"Leadership","DecisionMaking","Communication"}));

    engine.addCareer(new BusinessCareer(
        "Marketing Manager",
        {"Marketing","Communication","Creativity"}));

    engine.addCareer(new BusinessCareer(
        "Financial Analyst",
        {"Finance","AnalyticalThinking","RiskManagement"}));

    engine.addCareer(new BusinessCareer(
        "Entrepreneur",
        {"Leadership","Innovation","StrategicThinking"}));

    engine.addCareer(new BusinessCareer(
        "HR Manager",
        {"Communication","Leadership","Teamwork"}));

    // =====================================================
    // CREATIVE CAREERS
    // =====================================================

    engine.addCareer(new CreativeCareer(
        "UI/UX Designer",
        {"Design","Creativity","Visualization"}));

    engine.addCareer(new CreativeCareer(
        "Graphic Designer",
        {"Design","Branding","Creativity"}));

    engine.addCareer(new CreativeCareer(
        "Animator",
        {"Animation","Drawing","Visualization"}));

    engine.addCareer(new CreativeCareer(
        "Content Creator",
        {"Storytelling","Creativity","Branding"}));

    engine.addCareer(new CreativeCareer(
        "Digital Artist",
        {"Drawing","Design","Creativity"}));

    // =====================================================
    // MEDICAL CAREERS
    // =====================================================

    engine.addCareer(new MedicalCareer(
        "Doctor",
        {"Biology","Diagnosis","Empathy","Communication"}));

    engine.addCareer(new MedicalCareer(
        "Surgeon",
        {"Anatomy","Focus","Diagnosis","Patience"}));

    engine.addCareer(new MedicalCareer(
        "Pharmacist",
        {"Biology","Research","Focus"}));

    engine.addCareer(new MedicalCareer(
        "Physiotherapist",
        {"Empathy","Communication","Patience"}));

    engine.addCareer(new MedicalCareer(
        "Medical Researcher",
        {"Research","Biology","Diagnosis"}));

    // =====================================================
    // ENGINEERING CAREERS
    // =====================================================

    engine.addCareer(new EngineeringCareer(
        "Civil Engineer",
        {"Math","Design","StructuralAnalysis"}));

    engine.addCareer(new EngineeringCareer(
        "Mechanical Engineer",
        {"MechanicalSystems","Physics","ProblemSolving"}));

    engine.addCareer(new EngineeringCareer(
        "Electrical Engineer",
        {"ElectricalSystems","Physics","Math"}));

    engine.addCareer(new EngineeringCareer(
        "Industrial Engineer",
        {"ProjectManagement","Logic","Teamwork"}));

    engine.addCareer(new EngineeringCareer(
        "Robotics Engineer",
        {"Robotics","Programming","Innovation"}));

    bool loggedIn = false;
    int choice;

     while (true)
    {
                if (!loggedIn)
        {
            showMenu();
            cin >> choice;

            if (choice == 1)
            {
                pm.registerUser(user);
            }
            else if (choice == 2)
            {
                loggedIn = pm.loginUser(user);
            }
            else if (choice == 3)
            {
                cout << "\nExiting System...\n";
                break;
            }
            else
            {
                cout << "Invalid Choice!\n";
            }
        }

        else
        {
            showMainMenu();
            cin >> choice;

            if (choice == 1)
            {
                quiz.startQuiz(user);

                cout << "\n=====================================\n";
                cout << "        QUIZ RESULTS\n";
                cout << "=====================================\n";

                user.displayProfile();
            }

            else if (choice == 2)
            {
                bool quizTaken = false;

                if (
                    user.getSkill("Programming") > 0 ||
                    user.getSkill("Leadership") > 0 ||
                    user.getSkill("Creativity") > 0 ||
                    user.getSkill("Empathy") > 0 ||
                    user.getSkill("Logic") > 0
                )
                {
                    quizTaken = true;
                }

                if (!quizTaken)
                {
                    cout << "\nPlease complete the quiz first!\n";
                    continue;
                }

                cout << "\n=====================================\n";
                cout << "      CAREER RECOMMENDATIONS\n";
                cout << "=====================================\n";

                engine.generateRecommendations(user);
            }

            else if (choice == 3)
            {
                user.displayProfile();
            }

            else if (choice == 4)
            {
                loggedIn = false;

                cout << "\nLogged Out Successfully!\n";
            }

            else
            {
                cout << "Invalid Choice!\n";
            }
        }
    }

    return 0;
}