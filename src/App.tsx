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
import "./index.css"; // Import the CSS file

function App() {
  const [githubProjects, setGithubProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const personalInfo = {
    name: "Pramuditha Nadun",
    title: "Associate Software Engineer",
    intro:
      "I'm Pramuditha Nadun, a Software Engineering student with hands-on experience as an Associate Software Engineer. With a strong technical foundation and a passion for graphic designing, I'm always exploring innovative ways to solve problems and create impactful solutions.",
    image:
      "https://avatars.githubusercontent.com/u/79605208?v=4",
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
          per_page: 6,
          headers: { "X-GitHub-Api-Version": "2022-11-28" },
        });
        interface GithubRepo {
          name: string;
          description: string;
          link: string;
          stars: number;
          forks: number;
          language: string | null;
          updatedAt: string;
        }

        const repos: GithubRepo[] = response.data.map((repo: any) => ({
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
    alert("PDF download functionality would be implemented here");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-8">
          {/* Header Section */}
          <div className="header">
            <img src={personalInfo.image} alt={personalInfo.name} />
            <div>
              <h1>{personalInfo.name}</h1>
              <h2>{personalInfo.title}</h2>
              <p>{personalInfo.intro}</p>
              <div className="social-links">
                <a
                  href={`https://${personalInfo.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href={`https://${personalInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href={`mailto:${personalInfo.email}`}>
                  <Mail className="w-6 h-6" />
                </a>
                <button onClick={handleDownloadCV} className="download-cv-btn">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid-container">
            {/* Left Column */}
            <div>
              <section>
                <h3 className="section-title">Education</h3>
                {education.map((edu, index) => (
                  <div key={index} className="section-item">
                    <h4>{edu.degree}</h4>
                    <p>{edu.school}</p>
                    <p className="year">{edu.year}</p>
                  </div>
                ))}
              </section>

              <section>
                <h3 className="section-title">Experience</h3>
                {experience.map((exp, index) => (
                  <div key={index} className="section-item">
                    <h4>{exp.role}</h4>
                    <p>{exp.company}</p>
                    <p className="year">{exp.period}</p>
                    <p>{exp.description}</p>
                  </div>
                ))}
              </section>
            </div>

            {/* Right Column */}
            <div>
              <section>
                <h3 className="section-title">GitHub Projects</h3>
                {loading ? (
                  <p>Loading projects...</p>
                ) : (
                  githubProjects.map((project, index) => (
                    <div key={index} className="project-card">
                      <h4>{project.name}</h4>
                      <p>{project.description}</p>
                      <div className="project-info">
                        <span className="text-gray">⭐ {project.stars}</span>
                        <span className="text-gray">🍴 {project.forks}</span>
                        <span className="text-gray">{project.language}</span>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  ))
                )}
              </section>

              <section>
                <h3 className="section-title">References</h3>
                {references.map((ref, index) => (
                  <div key={index} className="section-item">
                    <h4>{ref.name}</h4>
                    <p>{ref.position}</p>
                    <p>{ref.contact}</p>
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
