#include "../include/Quiz.h"
#include "../include/User.h"
#include <iostream>

using namespace std;

Quiz::Quiz()
{
    domain = "";
}

void Quiz::chooseDomain()
{
    int choice;

    while (true)
    {
        cout << "\n=====================================\n";
        cout << "        SELECT CAREER CATEGORY\n";
        cout << "=====================================\n";
        cout << "1. IT / Software\n";
        cout << "2. Business\n";
        cout << "3. Creative\n";
        cout << "4. Medical\n";
        cout << "5. Engineering\n";
        cout << "Enter choice ---> ";

        cin >> choice;

        if (choice == 1) { domain = "IT"; break; }
        else if (choice == 2) { domain = "Business"; break; }
        else if (choice == 3) { domain = "Creative"; break; }
        else if (choice == 4) { domain = "Medical"; break; }
        else if (choice == 5) { domain = "Engineering"; break; }
        else cout << "Invalid choice!\n";
    }
}

int convert(int ans)
{
    return (ans * 100) / 5;
}

int getValidChoice()
{
    int choice;

    while (true)
    {
        cin >> choice;

        if (choice >= 1 && choice <= 5)
        {
            return choice;
        }

        cout << "Invalid choice! Enter 1-5 only: ";
    }
}

void Quiz::startQuiz(User& user)
{
    chooseDomain();

    int q;

    cout << "\n=====================================\n";
    cout << "      PROFESSIONAL CAREER TEST\n";
    cout << "=====================================\n";

    cout << "\nRate yourself from 1 to 5\n";
    cout << "1 = Very Weak\n";
    cout << "2 = Weak\n";
    cout << "3 = Average\n";
    cout << "4 = Strong\n";
    cout << "5 = Excellent\n";

    // ================= IT =================
if (domain == "IT")
{
    int programming,
        logic,
        math,
        problem,
        algorithms,
        database,
        networking,
        cybersecurity,
        ai,
        teamwork;

    cout << "Programming Skill: " << endl;
    cout << "1. Low\n";
    cout << "2. Fair\n";
    cout << "3. Good\n";
    cout << "4. Very Good\n";
    cout << "5. Excellent\n";
    cout << "Enter choice: ";
    q = getValidChoice();
    cout << endl;
    programming = convert(q);

    cout << "Logical Thinking: " << endl;
    cout << "1. Low\n";
    cout << "2. Fair\n";
    cout << "3. Good\n";
    cout << "4. Very Good\n";
    cout << "5. Excellent\n";
    cout << "Enter choice: ";
    q = getValidChoice();
    cout << endl;
    logic = convert(q);

    cout << "Mathematics Ability: " << endl;
    cout << "1. Low\n";
    cout << "2. Fair\n";
    cout << "3. Good\n";
    cout << "4. Very Good\n";
    cout << "5. Excellent\n";
    cout << "Enter choice: ";
    q = getValidChoice();
    cout << endl;
    math = convert(q);

    cout << "Problem Solving Skill: " << endl;
    cout << "1. Low\n";
    cout << "2. Fair\n";
    cout << "3. Good\n";
    cout << "4. Very Good\n";
    cout << "5. Excellent\n";
    cout << "Enter choice: ";
    q = getValidChoice();
    cout << endl;
    problem = convert(q);

    cout << "Algorithms Knowledge: " << endl;
    cout << "1. Low\n";
    cout << "2. Fair\n";
    cout << "3. Good\n";
    cout << "4. Very Good\n";
    cout << "5. Excellent\n";
    cout << "Enter choice: ";
    q = getValidChoice();
    cout << endl;
    algorithms = convert(q);

    cout << "Database Knowledge: " << endl;
    cout << "1. Low\n";
    cout << "2. Fair\n";
    cout << "3. Good\n";
    cout << "4. Very Good\n";
    cout << "5. Excellent\n";
    cout << "Enter choice: ";
    q = getValidChoice();
    cout << endl;
    database = convert(q);

    cout << "Networking Knowledge: " << endl;
    cout << "1. Low\n";
    cout << "2. Fair\n";
    cout << "3. Good\n";
    cout << "4. Very Good\n";
    cout << "5. Excellent\n";
    cout << "Enter choice: ";
    q = getValidChoice();
    cout << endl;
    networking = convert(q);

    cout << "Cyber Security Awareness: " << endl;
    cout << "1. Low\n";
    cout << "2. Fair\n";
    cout << "3. Good\n";
    cout << "4. Very Good\n";
    cout << "5. Excellent\n";
    cout << "Enter choice: ";
    q = getValidChoice();
    cout << endl;
    cybersecurity = convert(q);

    cout << "Artificial Intelligence Interest: " << endl;
    cout << "1. Low\n";
    cout << "2. Fair\n";
    cout << "3. Good\n";
    cout << "4. Very Good\n";
    cout << "5. Excellent\n";
    cout << "Enter choice: ";
    q = getValidChoice();
    cout << endl;
    ai = convert(q);

    cout << "Technical Teamwork Skill: " << endl;
    cout << "1. Low\n";
    cout << "2. Fair\n";
    cout << "3. Good\n";
    cout << "4. Very Good\n";
    cout << "5. Excellent\n";
    cout << "Enter choice: ";
    q = getValidChoice();
    cout << endl;
    teamwork = convert(q);

    user.setSkill("Programming", programming);
    user.setSkill("Logic", logic);
    user.setSkill("Math", math);
    user.setSkill("ProblemSolving", problem);
    user.setSkill("Algorithms", algorithms);
    user.setSkill("Database", database);
    user.setSkill("Networking", networking);
    user.setSkill("CyberSecurity", cybersecurity);
    user.setSkill("AI", ai);
    user.setSkill("Teamwork", teamwork);
}

// ================= BUSINESS =================
else if (domain == "Business")
{
    int leadership,
        communication,
        decisionMaking,
        finance,
        marketing,
        negotiation,
        management,
        entrepreneurship,
        teamwork,
        strategicThinking;

    cout << "Leadership Skill: " << endl;
    cout << "1. Low\n";
    cout << "2. Fair\n";
    cout << "3. Good\n";
    cout << "4. Very Good\n";
    cout << "5. Excellent\n";
    cout << "Enter choice: ";
    q = getValidChoice();
    cout << endl;
    leadership = convert(q);

    cout << "Communication Skill: " << endl;
    cout << "1. Low\n";
    cout << "2. Fair\n";
    cout << "3. Good\n";
    cout << "4. Very Good\n";
    cout << "5. Excellent\n";
    cout << "Enter choice: ";
    q = getValidChoice();
    cout << endl;
    communication = convert(q);

    cout << "Decision Making Skill: " << endl;
    cout << "1. Low\n";
    cout << "2. Fair\n";
    cout << "3. Good\n";
    cout << "4. Very Good\n";
    cout << "5. Excellent\n";
    cout << "Enter choice: ";
    q = getValidChoice();
    cout << endl;
    decisionMaking = convert(q);

    cout << "Finance Knowledge: " << endl;
    cout << "1. Low\n";
    cout << "2. Fair\n";
    cout << "3. Good\n";
    cout << "4. Very Good\n";
    cout << "5. Excellent\n";
    cout << "Enter choice: ";
    q = getValidChoice();
    cout << endl;
    finance = convert(q);

    cout << "Marketing Skill: " << endl;
    cout << "1. Low\n";
    cout << "2. Fair\n";
    cout << "3. Good\n";
    cout << "4. Very Good\n";
    cout << "5. Excellent\n";
    cout << "Enter choice: ";
    q = getValidChoice();
    cout << endl;
    marketing = convert(q);

    cout << "Negotiation Skill: " << endl;
    cout << "1. Low\n";
    cout << "2. Fair\n";
    cout << "3. Good\n";
    cout << "4. Very Good\n";
    cout << "5. Excellent\n";
    cout << "Enter choice: ";
    q = getValidChoice();
    cout << endl;
    negotiation = convert(q);

    cout << "Management Skill: " << endl;
    cout << "1. Low\n";
    cout << "2. Fair\n";
    cout << "3. Good\n";
    cout << "4. Very Good\n";
    cout << "5. Excellent\n";
    cout << "Enter choice: ";
    q = getValidChoice();
    cout << endl;
    management = convert(q);

    cout << "Entrepreneurship Skill: " << endl;
    cout << "1. Low\n";
    cout << "2. Fair\n";
    cout << "3. Good\n";
    cout << "4. Very Good\n";
    cout << "5. Excellent\n";
    cout << "Enter choice: ";
    q = getValidChoice();
    cout << endl;
    entrepreneurship = convert(q);

    cout << "Teamwork Skill: " << endl;
    cout << "1. Low\n";
    cout << "2. Fair\n";
    cout << "3. Good\n";
    cout << "4. Very Good\n";
    cout << "5. Excellent\n";
    cout << "Enter choice: ";
    q = getValidChoice();
    cout << endl;
    teamwork = convert(q);

    cout << "Strategic Thinking Skill: " << endl;
    cout << "1. Low\n";
    cout << "2. Fair\n";
    cout << "3. Good\n";
    cout << "4. Very Good\n";
    cout << "5. Excellent\n";
    cout << "Enter choice: ";
    q = getValidChoice();
    cout << endl;
    strategicThinking = convert(q);

    user.setSkill("Leadership", leadership);
    user.setSkill("Communication", communication);
    user.setSkill("DecisionMaking", decisionMaking);
    user.setSkill("Finance", finance);
    user.setSkill("Marketing", marketing);
    user.setSkill("Negotiation", negotiation);
    user.setSkill("Management", management);
    user.setSkill("Entrepreneurship", entrepreneurship);
    user.setSkill("Teamwork", teamwork);
    user.setSkill("StrategicThinking", strategicThinking);
}

// ================= CREATIVE =================
else if (domain == "Creative")
{
    int creativity,
        design,
        innovation,
        visualization,
        drawing,
        storytelling,
        animation,
        photography,
        branding,
        teamwork;

    cout << "Creativity Skill: " << endl;
    cout << "1. Low\n";
    cout << "2. Fair\n";
    cout << "3. Good\n";
    cout << "4. Very Good\n";
    cout << "5. Excellent\n";
    cout << "Enter choice: ";
    q = getValidChoice();
    cout << endl;
    creativity = convert(q);

    cout << "Design Skill: " << endl;
    cout << "1. Low\n";
    cout << "2. Fair\n";
    cout << "3. Good\n";
    cout << "4. Very Good\n";
    cout << "5. Excellent\n";
    cout << "Enter choice: ";
    q = getValidChoice();
    cout << endl;
    design = convert(q);

    cout << "Innovation Skill: " << endl;
    cout << "1. Low\n";
    cout << "2. Fair\n";
    cout << "3. Good\n";
    cout << "4. Very Good\n";
    cout << "5. Excellent\n";
    cout << "Enter choice: ";
    q = getValidChoice();
    cout << endl;
    innovation = convert(q);

    cout << "Visualization Skill: " << endl;
    cout << "1. Low\n";
    cout << "2. Fair\n";
    cout << "3. Good\n";
    cout << "4. Very Good\n";
    cout << "5. Excellent\n";
    cout << "Enter choice: ";
    q = getValidChoice();
    cout << endl;
    visualization = convert(q);

    cout << "Drawing Skill: " << endl;
    cout << "1. Low\n";
    cout << "2. Fair\n";
    cout << "3. Good\n";
    cout << "4. Very Good\n";
    cout << "5. Excellent\n";
    cout << "Enter choice: ";
    q = getValidChoice();
    cout << endl;
    drawing = convert(q);

    cout << "Storytelling Skill: " << endl;
    cout << "1. Low\n";
    cout << "2. Fair\n";
    cout << "3. Good\n";
    cout << "4. Very Good\n";
    cout << "5. Excellent\n";
    cout << "Enter choice: ";
    q = getValidChoice();
    cout << endl;
    storytelling = convert(q);

    cout << "Animation Skill: " << endl;
    cout << "1. Low\n";
    cout << "2. Fair\n";
    cout << "3. Good\n";
    cout << "4. Very Good\n";
    cout << "5. Excellent\n";
    cout << "Enter choice: ";
    q = getValidChoice();
    cout << endl;
    animation = convert(q);

    cout << "Photography Skill: " << endl;
    cout << "1. Low\n";
    cout << "2. Fair\n";
    cout << "3. Good\n";
    cout << "4. Very Good\n";
    cout << "5. Excellent\n";
    cout << "Enter choice: ";
    q = getValidChoice();
    cout << endl;
    photography = convert(q);

    cout << "Branding Skill: " << endl;
    cout << "1. Low\n";
    cout << "2. Fair\n";
    cout << "3. Good\n";
    cout << "4. Very Good\n";
    cout << "5. Excellent\n";
    cout << "Enter choice: ";
    q = getValidChoice();
    cout << endl;
    branding = convert(q);

    cout << "Creative Teamwork Skill: " << endl;
    cout << "1. Low\n";
    cout << "2. Fair\n";
    cout << "3. Good\n";
    cout << "4. Very Good\n";
    cout << "5. Excellent\n";
    cout << "Enter choice: ";
    q = getValidChoice();
    cout << endl;
    teamwork = convert(q);

    user.setSkill("Creativity", creativity);
    user.setSkill("Design", design);
    user.setSkill("Innovation", innovation);
    user.setSkill("Visualization", visualization);
    user.setSkill("Drawing", drawing);
    user.setSkill("Storytelling", storytelling);
    user.setSkill("Animation", animation);
    user.setSkill("Photography", photography);
    user.setSkill("Branding", branding);
    user.setSkill("Teamwork", teamwork);
}

// ================= MEDICAL =================
else if (domain == "Medical")
{
    int empathy,
        biology,
        patience,
        focus,
        communication,
        anatomy,
        research,
        diagnosis,
        teamwork,
        ethics;

    cout << "Empathy Skill: " << endl;
    cout << "1. Low\n";
    cout << "2. Fair\n";
    cout << "3. Good\n";
    cout << "4. Very Good\n";
    cout << "5. Excellent\n";
    cout << "Enter choice: ";
    q = getValidChoice();
    cout << endl;
    empathy = convert(q);

    cout << "Biology Knowledge: " << endl;
    cout << "1. Low\n";
    cout << "2. Fair\n";
    cout << "3. Good\n";
    cout << "4. Very Good\n";
    cout << "5. Excellent\n";
    cout << "Enter choice: ";
    q = getValidChoice();
    cout << endl;
    biology = convert(q);

    cout << "Patience Skill: " << endl;
    cout << "1. Low\n";
    cout << "2. Fair\n";
    cout << "3. Good\n";
    cout << "4. Very Good\n";
    cout << "5. Excellent\n";
    cout << "Enter choice: ";
    q = getValidChoice();
    cout << endl;
    patience = convert(q);

    cout << "Focus and Concentration: " << endl;
    cout << "1. Low\n";
    cout << "2. Fair\n";
    cout << "3. Good\n";
    cout << "4. Very Good\n";
    cout << "5. Excellent\n";
    cout << "Enter choice: ";
    q = getValidChoice();
    cout << endl;
    focus = convert(q);

    cout << "Communication Skill: " << endl;
    cout << "1. Low\n";
    cout << "2. Fair\n";
    cout << "3. Good\n";
    cout << "4. Very Good\n";
    cout << "5. Excellent\n";
    cout << "Enter choice: ";
    q = getValidChoice();
    cout << endl;
    communication = convert(q);

    cout << "Human Anatomy Knowledge: " << endl;
    cout << "1. Low\n";
    cout << "2. Fair\n";
    cout << "3. Good\n";
    cout << "4. Very Good\n";
    cout << "5. Excellent\n";
    cout << "Enter choice: ";
    q = getValidChoice();
    cout << endl;
    anatomy = convert(q);

    cout << "Medical Research Skill: " << endl;
    cout << "1. Low\n";
    cout << "2. Fair\n";
    cout << "3. Good\n";
    cout << "4. Very Good\n";
    cout << "5. Excellent\n";
    cout << "Enter choice: ";
    q = getValidChoice();
    cout << endl;
    research = convert(q);

    cout << "Diagnosis Ability: " << endl;
    cout << "1. Low\n";
    cout << "2. Fair\n";
    cout << "3. Good\n";
    cout << "4. Very Good\n";
    cout << "5. Excellent\n";
    cout << "Enter choice: ";
    q = getValidChoice();
    cout << endl;
    diagnosis = convert(q);

    cout << "Medical Teamwork Skill: " << endl;
    cout << "1. Low\n";
    cout << "2. Fair\n";
    cout << "3. Good\n";
    cout << "4. Very Good\n";
    cout << "5. Excellent\n";
    cout << "Enter choice: ";
    q = getValidChoice();
    cout << endl;
    teamwork = convert(q);

    cout << "Medical Ethics Understanding: " << endl;
    cout << "1. Low\n";
    cout << "2. Fair\n";
    cout << "3. Good\n";
    cout << "4. Very Good\n";
    cout << "5. Excellent\n";
    cout << "Enter choice: ";
    q = getValidChoice();
    cout << endl;
    ethics = convert(q);

    user.setSkill("Empathy", empathy);
    user.setSkill("Biology", biology);
    user.setSkill("Patience", patience);
    user.setSkill("Focus", focus);
    user.setSkill("Communication", communication);
    user.setSkill("Anatomy", anatomy);
    user.setSkill("Research", research);
    user.setSkill("Diagnosis", diagnosis);
    user.setSkill("Teamwork", teamwork);
    user.setSkill("Ethics", ethics);
}

// ================= ENGINEERING =================
else if (domain == "Engineering")
{
    int logic,
        math,
        design,
        problem,
        physics,
        mechanics,
        analytical,
        innovation,
        teamwork,
        projectManagement;

    cout << "Logic Skill: " << endl;
    cout << "1. Low\n";
    cout << "2. Fair\n";
    cout << "3. Good\n";
    cout << "4. Very Good\n";
    cout << "5. Excellent\n";
    cout << "Enter choice: ";
    q = getValidChoice();
    cout << endl;
    logic = convert(q);

    cout << "Mathematics Skill: " << endl;
    cout << "1. Low\n";
    cout << "2. Fair\n";
    cout << "3. Good\n";
    cout << "4. Very Good\n";
    cout << "5. Excellent\n";
    cout << "Enter choice: ";
    q = getValidChoice();
    cout << endl;
    math = convert(q);

    cout << "Design Thinking Skill: " << endl;
    cout << "1. Low\n";
    cout << "2. Fair\n";
    cout << "3. Good\n";
    cout << "4. Very Good\n";
    cout << "5. Excellent\n";
    cout << "Enter choice: ";
    q = getValidChoice();
    cout << endl;
    design = convert(q);

    cout << "Problem Solving Skill: " << endl;
    cout << "1. Low\n";
    cout << "2. Fair\n";
    cout << "3. Good\n";
    cout << "4. Very Good\n";
    cout << "5. Excellent\n";
    cout << "Enter choice: ";
    q = getValidChoice();
    cout << endl;
    problem = convert(q);

    cout << "Physics Knowledge: " << endl;
    cout << "1. Low\n";
    cout << "2. Fair\n";
    cout << "3. Good\n";
    cout << "4. Very Good\n";
    cout << "5. Excellent\n";
    cout << "Enter choice: ";
    q = getValidChoice();
    cout << endl;
    physics = convert(q);

    cout << "Mechanics Understanding: " << endl;
    cout << "1. Low\n";
    cout << "2. Fair\n";
    cout << "3. Good\n";
    cout << "4. Very Good\n";
    cout << "5. Excellent\n";
    cout << "Enter choice: ";
    q = getValidChoice();
    cout << endl;
    mechanics = convert(q);

    cout << "Analytical Thinking Skill: " << endl;
    cout << "1. Low\n";
    cout << "2. Fair\n";
    cout << "3. Good\n";
    cout << "4. Very Good\n";
    cout << "5. Excellent\n";
    cout << "Enter choice: ";
    q = getValidChoice();
    cout << endl;
    analytical = convert(q);

    cout << "Innovation Skill: " << endl;
    cout << "1. Low\n";
    cout << "2. Fair\n";
    cout << "3. Good\n";
    cout << "4. Very Good\n";
    cout << "5. Excellent\n";
    cout << "Enter choice: ";
    q = getValidChoice();
    cout << endl;
    innovation = convert(q);

    cout << "Engineering Teamwork Skill: " << endl;
    cout << "1. Low\n";
    cout << "2. Fair\n";
    cout << "3. Good\n";
    cout << "4. Very Good\n";
    cout << "5. Excellent\n";
    cout << "Enter choice: ";
    q = getValidChoice();
    cout << endl;
    teamwork = convert(q);

    cout << "Project Management Skill: " << endl;
    cout << "1. Low\n";
    cout << "2. Fair\n";
    cout << "3. Good\n";
    cout << "4. Very Good\n";
    cout << "5. Excellent\n";
    cout << "Enter choice: ";
    q = getValidChoice();
    cout << endl;
    projectManagement = convert(q);

    user.setSkill("Logic", logic);
    user.setSkill("Math", math);
    user.setSkill("Design", design);
    user.setSkill("ProblemSolving", problem);
    user.setSkill("Physics", physics);
    user.setSkill("Mechanics", mechanics);
    user.setSkill("AnalyticalThinking", analytical);
    user.setSkill("Innovation", innovation);
    user.setSkill("Teamwork", teamwork);
    user.setSkill("ProjectManagement", projectManagement);
}}