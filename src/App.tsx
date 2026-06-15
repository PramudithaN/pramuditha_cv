import React from "react";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function App() {
  const personalInfo = {
    name: "PRAMUDITHA NADUN",
    title: "ASSOCIATE SOFTWARE ENGINEER",
    intro:
      "Associate Software Engineer with 5 years of combined academic and professional experience building scalable applications, highly interactive frontends, and robust backend systems. Specializing in React, TypeScript, and Spring Boot, with a strong foundation in UI/UX and visual design. Adept at bridging the gap between technical architecture and modern user experience, utilizing CI/CD pipelines to ensure seamless deployments. Proven experience in developing complex, data-driven architectures, distributed asynchronous systems, and predictive modeling algorithms.",
    image: "https://avatars.githubusercontent.com/u/79605208?v=4",
    email: "pramudithanadun@gmail.com",
    github: "github.com/PramudithaN",
    githubUsername: "PramudithaN",
    linkedin: "linkedin.com/in/pramuditha-nadun-612b1b204",
    phone: "+94-713-052-556",
    address: "Nugegoda, Sri Lanka",
  };

  const contactDetails = [
    {
      type: "Phone",
      value: personalInfo.phone,
    },
    {
      type: "Email",
      value: personalInfo.email,
    },
    {
      type: "GitHub",
      value: personalInfo.github,
    },
    {
      type: "LinkedIn",
      value: personalInfo.linkedin,
    },
    {
      type: "Address",
      value: personalInfo.address,
    },
  ];

  const education = [
    {
      degree: "BSc (Hons) Software Engineering",
      school: "University of Westminster, UK",
      year: "Feb 2022 - 2026",
    }
  ];

  const experience = [
    {
      role: "Associate Software Engineer (Fusion X Team)",
      company: "LOLC Technologies",
      period: "2024 - Present",
      description: [
        "Develop and maintain enterprise-scale web applications using React and TypeScript, leveraging Redux for state management and Ant Design for modern, responsive UI components.",
        "Architect and optimize backend functionalities using Spring Boot, ensuring efficient data processing, secure user access control, and precise screen permissions.",
        "Streamline deployment lifecycles across QA, UAT, and Production environments by actively managing and monitoring CI/CD pipelines via Jenkins and ArgoCD.",
        "Bridge technical and design workflows by conceptualizing and refining user interfaces in Figma, directly elevating the overall user experience and application usability.",
      ],
    },
    {
      role: "Trainee Software Engineer (Fusion Team)",
      company: "LOLC Technologies",
      period: "Mar 2022 - Oct 2024",
      description: [
        "Engineered interactive frontend components and responsive layouts, collaborating with cross-functional teams to translate business requirements into functional software solutions.",
        "Maintained and developed backend processes and reporting systems using Java and Oracle Forms.",
        "Designed and generated complex, data-driven dashboards utilizing Jasper Reports to facilitate high-level business decision-making.",
        "Contributed heavily to the UI/UX team, transforming user journeys into actionable Figma wireframes and high-fidelity designs.",
      ],
    },
  ];

  const projects = [
    {
      title: "11LabsM - Neural Voice Synthesizer & Translator",
      tech: "React, FastAPI, Celery, Redis, PostgreSQL, Docker",
      description: [
        "Architected a distributed full-stack platform that simultaneously translates and synthesizes speech into 17+ languages utilizing the ElevenLabs, DeepL, and Google APIs.",
        "Orchestrated asynchronous background task processing using Celery and Redis to handle heavy text-to-speech workloads, providing users with real-time progress tracking.",
        "Engineered a SHA-256 content-addressed caching mechanism and integrated scalable object storage (MinIO/AWS S3) to significantly minimize external API costs and reduce response latency.",
        "Containerized the complete application infrastructure—including the API, workers, cache, and database—using Docker Compose for streamlined deployment.",
      ],
    },
    {
      title: "Brent Crude Oil Forecasting System",
      tech: "Python, XGBoost, GRU, ARIMA, VMD",
      description: [
        "Engineered a leakage-free ensemble machine learning model to execute a 5-day price prediction horizon for the crude oil market.",
        "Implemented Variational Mode Decomposition (VMD) to analyze and visualize non-linear frequency signals and Intrinsic Mode Functions (IMFs).",
        "Integrated natural language processing via FinBERT, strictly utilizing event-driven, lagged news sentiment to eliminate forward-filling data leakage.",
      ],
    },
  ];

  const technicalSkills = [
    { category: "Frontend", skills: "React, TypeScript, JavaScript, React Hooks & Forms, Redux, Ant Design (AntD), HTML, CSS" },
    { category: "Backend & Databases", skills: "Spring Boot, Java, FastAPI, Python, PostgreSQL, Oracle Forms, Jasper Reports" },
    { category: "DevOps & Infrastructure", skills: "Docker, Git (commands & tagging), Jenkins, ArgoCD, Celery, Redis, AWS S3 / MinIO" },
    { category: "Design & UI/UX", skills: "Figma, Wireframing, Adobe Creative Suite (Photoshop, Illustrator, Premiere Pro, After Effects)" },
    { category: "Data & Analytics", skills: "XGBoost, GRU, ARIMA, Variational Mode Decomposition (VMD), FinBERT" },
  ];

  const handleDownloadPDF = () => {
    const element = document.getElementById('resume-content');
    if (element) {
      html2canvas(element).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgWidth = 210;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save('Pramuditha_Nadun_CV.pdf');
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div id="resume-content" className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-8">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row items-center mb-8 border-b pb-8">
            <img
              src={personalInfo.image}
              alt={personalInfo.name}
              className="w-32 h-32 rounded-full object-cover mb-4 md:mb-0 md:mr-8 border-4 border-blue-50"
            />
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
                {personalInfo.name}
              </h1>
              <h2 className="text-xl font-semibold text-blue-600 mb-3">
                {personalInfo.title}
              </h2>
              <p className="text-gray-600 max-w-3xl leading-relaxed text-sm">
                {personalInfo.intro}
              </p>

              <div className="flex items-center justify-center md:justify-start space-x-4 mt-6">
                <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href={`mailto:${personalInfo.email}`} className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
                <button
                  onClick={handleDownloadPDF}
                  className="flex items-center bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-shadow shadow-md hover:shadow-lg"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left Column (Sidebar-ish) */}
            <div className="lg:col-span-1 border-r pr-8">
              <section className="mb-10">
                <h3 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wider border-b-2 border-blue-600 pb-1 inline-block">
                  Contact
                </h3>
                {contactDetails.map((contact, index) => (
                  <div key={index} className="mb-3">
                    <h4 className="text-xs font-bold text-gray-500 uppercase">{contact.type}</h4>
                    {contact.type === "GitHub" || contact.type === "Email" || contact.type === "LinkedIn" ? (
                      <a
                        href={contact.type === "Email" ? `mailto:${contact.value}` : `https://${contact.value}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-sm break-all"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-gray-700 text-sm">{contact.value}</p>
                    )}
                  </div>
                ))}
              </section>

              <section className="mb-10">
                <h3 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wider border-b-2 border-blue-600 pb-1 inline-block">
                  Technical Skills
                </h3>
                {technicalSkills.map((skillGroup, index) => (
                  <div key={index} className="mb-4">
                    <h4 className="text-sm font-bold text-gray-800 mb-1">{skillGroup.category}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{skillGroup.skills}</p>
                  </div>
                ))}
              </section>

              <section>
                <h3 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wider border-b-2 border-blue-600 pb-1 inline-block">
                  Education
                </h3>
                {education.map((edu, index) => (
                  <div key={index} className="mb-4">
                    <h4 className="text-sm font-bold text-gray-900">{edu.degree}</h4>
                    <p className="text-gray-600 text-sm">{edu.school}</p>
                    <p className="text-blue-600 font-medium text-xs mt-1">{edu.year}</p>
                  </div>
                ))}
              </section>
            </div>

            {/* Right Column (Experience & Projects) */}
            <div className="lg:col-span-2">
              <section className="mb-10">
                <h3 className="text-lg font-bold text-gray-900 mb-6 uppercase tracking-wider border-b-2 border-blue-600 pb-1 inline-block">
                  Professional Experience
                </h3>
                {experience.map((exp, index) => (
                  <div key={index} className="mb-8 relative pl-4 border-l-2 border-gray-100">
                    <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-[7px] top-1"></div>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-bold text-gray-900">{exp.role}</h4>
                      <span className="text-blue-600 font-semibold text-sm bg-blue-50 px-3 py-1 rounded-full">{exp.period}</span>
                    </div>
                    <p className="text-gray-700 font-semibold mb-3">{exp.company}</p>
                    <ul className="space-y-2">
                      {exp.description.map((point, i) => (
                        <li key={i} className="text-gray-600 text-sm flex items-start">
                          <span className="text-blue-600 mr-2 mt-1.5">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </section>

              <section>
                <h3 className="text-lg font-bold text-gray-900 mb-6 uppercase tracking-wider border-b-2 border-blue-600 pb-1 inline-block">
                  Selected Projects & Research
                </h3>
                {projects.map((project, index) => (
                  <div key={index} className="mb-8 bg-gray-50 p-5 rounded-xl border border-gray-100">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">{project.title}</h4>
                    <p className="text-blue-600 text-xs font-mono mb-4 uppercase tracking-tight">{project.tech}</p>
                    <ul className="space-y-2">
                      {project.description.map((point, i) => (
                        <li key={i} className="text-gray-600 text-sm flex items-start">
                          <span className="text-blue-400 mr-2 mt-1.5">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
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