import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  Star,
  GitFork,
} from "lucide-react";
import { Octokit } from "@octokit/rest";

interface GithubRepo {
  name: string;
  description: string;
  link: string;
  stars: number;
  forks: number;
  language: string | null;
  updatedAt: string;
}

function App() {
  const [githubProjects, setGithubProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const personalInfo = {
    name: "Pramuditha Nadun",
    title: "Associate Software Engineer",
    intro:
      "I'm Pramuditha Nadun, a Software Engineering student with hands-on experience as an Associate Software Engineer. With a strong technical foundation and a passion for graphic designing, I'm always exploring innovative ways to solve problems and create impactful solutions.",
    image: "https://avatars.githubusercontent.com/u/79605208?v=4",
    email: "pramudithanadun@gmail.com",
    github: "github.com/PramudithaN",
    githubUsername: "PramudithaN",
    linkedin: "www.linkedin.com/in/pramuditha-nadun-612b1b204",
  };

  const education = [
    {
      degree: "Bachelor of Software Engineering",
      school: "Informatics Institute of Technology",
      year: "Feb 2022 - Present",
    },
    {
      degree: "G.C.E Advanced Level",
      school: "Mahinda College",
      year: "2017 - 2019",
    },
    {
      degree: "G.C.E Ordinary Level",
      school: "Mahinda College",
      year: "2010 - 2016",
      grade: "A-8 B-1",
    },
  ];

  const experience = [
    {
      role: "Associate Software Engineer",
      company: "LOLC Technologies",
      period: "Oct 2024 - Present",
      description: "Working on software development in a hybrid environment.",
    },
    {
      role: "Trainee",
      company: "LOLC Technologies",
      period: "Mar 2022 - Oct 2024",
      description:
        "Completed a 2-year 8-month internship in software engineering.",
    },
  ];

  const references = [
    {
      name: "Jane Smith",
      position: "CTO at Tech Solutions",
      contact: "Available upon request",
    },
    {
      name: "Mike Johnson",
      position: "Lead Developer at Digital Innovations",
      contact: "Available upon request",
    },
  ];

  useEffect(() => {
    const fetchGithubProjects = async () => {
      try {
        const octokit = new Octokit();
        const response = await octokit.request("GET /users/{username}/repos", {
          username: personalInfo.githubUsername,
          sort: "updated",
          headers: {
            "X-GitHub-Api-Version": "2022-11-28",
          },
        });

        const repos: GithubRepo[] = response.data
          .filter(
            (repo: any) =>
              ![
                "Wavewatchers-Figma",
                "Celestial-Routes-Figma",
                "my-to-do-app",
                "PramudithaN",
              ].includes(repo.name)
          )
          .map((repo: any) => ({
            name: repo.name,
            description: repo.description || "No description available",
            link: repo.html_url,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            language: repo.language,
            updatedAt: new Date(repo.updated_at).toLocaleDateString(),
          }));

        setGithubProjects(repos);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching GitHub repositories:", error);
        setLoading(false);
      }
    };

    fetchGithubProjects();
  }, [personalInfo.githubUsername]);

  const handleDownloadCV = () => {
    // In a real application, this would trigger the download of an actual PDF
    alert("PDF download functionality would be implemented here");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-8">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row items-center mb-8">
            <img
              src={personalInfo.image}
              alt={personalInfo.name}
              className="w-32 h-32 rounded-full object-cover mb-4 md:mb-0 md:mr-8"
            />
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold text-gray-900">
                {personalInfo.name}
              </h1>
              <h2 className="text-xl text-blue-600 mb-2">
                {personalInfo.title}
              </h2>
              <p className="text-gray-600 max-w-2xl">{personalInfo.intro}</p>

              <div className="flex items-center justify-center md:justify-start space-x-4 mt-4">
                <a
                  href={`https://${personalInfo.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href={`https://${personalInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-gray-600 hover:text-gray-900"
                >
                  <Mail className="w-6 h-6" />
                </a>
                <button
                  onClick={handleDownloadCV}
                  className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div>
              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Education
                </h3>
                {education.map((edu, index) => (
                  <div key={index} className="mb-4">
                    <h4 className="font-medium text-gray-900">{edu.degree}</h4>
                    <p className="text-gray-600">{edu.school}</p>
                    <p className="text-gray-500 text-sm">{edu.year}</p>
                  </div>
                ))}
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Experience
                </h3>
                {experience.map((exp, index) => (
                  <div key={index} className="mb-4">
                    <h4 className="font-medium text-gray-900">{exp.role}</h4>
                    <p className="text-gray-600">{exp.company}</p>
                    <p className="text-gray-500 text-sm">{exp.period}</p>
                    <p className="text-gray-600 mt-1">{exp.description}</p>
                  </div>
                ))}
              </section>
            </div>

            {/* Right Column */}
            <div>
              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Projects
                </h3>
                {loading ? (
                  <p className="text-gray-600">Loading projects...</p>
                ) : (
                  githubProjects.map((project, index) => (
                    <div key={index} className="mb-6 bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <h4 className="font-medium text-gray-900">
                            {project.name}
                          </h4>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 text-blue-600 hover:text-blue-800"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span className="flex items-center">
                            <Star className="w-4 h-4 mr-1" />
                            {project.stars}
                          </span>
                          <span className="flex items-center">
                            <GitFork className="w-4 h-4 mr-1" />
                            {project.forks}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-600 mt-2">
                        {project.description}
                      </p>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-sm text-blue-600">
                          {project.language}
                        </span>
                        <span className="text-sm text-gray-500">
                          Updated: {project.updatedAt}
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  References
                </h3>
                {references.map((ref, index) => (
                  <div key={index} className="mb-4">
                    <h4 className="font-medium text-gray-900">{ref.name}</h4>
                    <p className="text-gray-600">{ref.position}</p>
                    <p className="text-gray-500 text-sm">{ref.contact}</p>
                  </div>
                ))}
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
