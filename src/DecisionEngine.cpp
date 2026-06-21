#include "../include/DecisionEngine.h"

DecisionEngine::DecisionEngine()
{
}

DecisionEngine::~DecisionEngine()
{
    for (Career* c : careers)
    {
        delete c;
    }
}

void DecisionEngine::addCareer(Career* career)
{
    careers.push_back(career);
}

void DecisionEngine::displayBar(int score)
{
    if (score < 0)
        score = 0;

    if (score > 100)
        score = 100;

    cout << "[";

    int bars = score / 5;

    for (int i = 0; i < 20; i++)
    {
        if (i < bars)
            cout << "\u2588";
        else
            cout << " ";
    }

    cout << "] " << score << "%";
}

void DecisionEngine::explainCareer(const string& careerName,
                                   int score)
{
    cout << "\n=====================================\n";
    cout << "Career Insight\n";
    cout << "=====================================\n";

    cout << "Recommended Career : "
         << careerName << endl;

    cout << "Match Score : "
         << score
         << "%\n";

    if (score >= 85)
    {
        cout << "Excellent match.\n";
    }
    else if (score >= 70)
    {
        cout << "Very strong match.\n";
    }
    else if (score >= 55)
    {
        cout << "Good match.\n";
    }
    else
    {
        cout << "Moderate match.\n";
    }
}

void DecisionEngine::generateRecommendations(const User& user)
{
    vector<pair<string, int>> results;

    for (Career* c : careers)
    {
        int score = c->calculateScore(user);

        if (score < 0)
            score = 0;

        if (score > 100)
            score = 100;

        results.push_back(
            {
                c->getCareerName(),
                score
            });
    }

    // Sort descending
    for (int i = 0; i < results.size(); i++)
    {
        for (int j = i + 1; j < results.size(); j++)
        {
            if (results[j].second >
                results[i].second)
            {
                swap(results[i], results[j]);
            }
        }
    }

    cout << "\n=====================================\n";
    cout << "      CAREER RECOMMENDATIONS\n";
    cout << "=====================================\n";

    int limit = results.size();

    if (limit > 10)
        limit = 10;

    for (int i = 0; i < limit; i++)
    {
        cout << "\n";

        if (i == 0)
            cout << "TOP CAREER\n";
        else if (i == 1)
            cout << "SECOND BEST\n";
        else if (i == 2)
            cout << "THIRD BEST\n";

        cout << results[i].first << endl;

        displayBar(results[i].second);

        cout << endl;
    }

    if (!results.empty())
    {
        explainCareer(
            results[0].first,
            results[0].second
        );
    }

    cout << "\n=====================================\n";
}

string DecisionEngine::getTopCareer(const User& user)
{
    string bestCareer = "";
    int bestScore = -1;

    for (Career* c : careers)
    {
        int score = c->calculateScore(user);

        if (score > bestScore)
        {
            bestScore = score;
            bestCareer = c->getCareerName();
        }
    }

    return bestCareer;
}

int DecisionEngine::getTopCareerScore(const User& user)
{
    int bestScore = 0;

    for (Career* c : careers)
    {
        int score = c->calculateScore(user);

        if (score > bestScore)
        {
            bestScore = score;
        }
    }

    return bestScore;
}

string DecisionEngine::getCareerRoadmap(const string& careerName)
{
    // IT
    if (careerName == "Software Engineer")
        return "Learn C++, Data Structures, Algorithms, OOP, Databases, Web Development and Software Engineering.";

    else if (careerName == "AI Engineer")
        return "Learn Python, Mathematics, Machine Learning, Deep Learning, Neural Networks and AI Frameworks.";

    else if (careerName == "Data Scientist")
        return "Learn Statistics, Python, SQL, Data Analysis, Machine Learning and Data Visualization.";

    else if (careerName == "Cybersecurity Analyst")
        return "Learn Networking, Linux, Ethical Hacking, Security Tools and Risk Assessment.";

    else if (careerName == "Cloud Engineer")
        return "Learn AWS, Azure, Linux, Networking, Docker and Cloud Architecture.";

    // Business
    else if (careerName == "Business Manager")
        return "Develop leadership, management, communication and organizational skills.";

    else if (careerName == "Marketing Manager")
        return "Learn digital marketing, branding, market research and customer behavior.";

    else if (careerName == "Financial Analyst")
        return "Study finance, accounting, investment analysis and business forecasting.";

    else if (careerName == "Entrepreneur")
        return "Build leadership, innovation, business planning and startup management skills.";

    else if (careerName == "HR Manager")
        return "Learn recruitment, employee management, communication and HR policies.";

    // Creative
    else if (careerName == "UI/UX Designer")
        return "Learn Figma, UX Research, Wireframing, Prototyping and Design Thinking.";

    else if (careerName == "Graphic Designer")
        return "Master Photoshop, Illustrator, Branding and Visual Communication.";

    else if (careerName == "Animator")
        return "Learn 2D/3D Animation, Storyboarding and Motion Design.";

    else if (careerName == "Content Creator")
        return "Develop storytelling, video production, branding and audience engagement skills.";

    else if (careerName == "Digital Artist")
        return "Improve drawing, digital painting, illustration and creative software skills.";

    // Medical
    else if (careerName == "Doctor")
        return "Complete MBBS, clinical rotations, residency and professional licensing.";

    else if (careerName == "Surgeon")
        return "Complete medical education, surgical residency and advanced specialization.";

    else if (careerName == "Pharmacist")
        return "Study pharmacy, medicines, drug interactions and patient care.";

    else if (careerName == "Physiotherapist")
        return "Learn rehabilitation, anatomy, exercise therapy and patient treatment.";

    else if (careerName == "Medical Researcher")
        return "Study biology, medical science, laboratory research and scientific methodology.";

    // Engineering
    else if (careerName == "Civil Engineer")
        return "Study structural design, construction management and engineering mathematics.";

    else if (careerName == "Mechanical Engineer")
        return "Learn mechanics, thermodynamics, manufacturing and machine design.";

    else if (careerName == "Electrical Engineer")
        return "Study circuits, power systems, electronics and electrical design.";

    else if (careerName == "Industrial Engineer")
        return "Learn process optimization, project management and operational efficiency.";

    else if (careerName == "Robotics Engineer")
        return "Study robotics, automation, programming, AI and embedded systems.";

    return "Career roadmap not available.";
}