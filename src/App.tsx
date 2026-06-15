import React, { useState } from "react";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function App() {
  const [isDownloading, setIsDownloading] = useState(false);

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
    { type: "Phone", value: personalInfo.phone },
    { type: "Email", value: personalInfo.email },
    { type: "GitHub", value: personalInfo.github },
    { type: "LinkedIn", value: personalInfo.linkedin },
    { type: "Address", value: personalInfo.address },
  ];

  const education = [
    {
      degree: "BSc (Hons) Software Engineering",
      school: "University of Westminster, UK",
      year: "Feb 2022 - 2026",
    },
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
    { category: "DevOps & Infrastructure", skills: "Docker, Git, Jenkins, ArgoCD, Celery, Redis, AWS S3 / MinIO" },
    { category: "Design & UI/UX", skills: "Figma, Wireframing, Adobe Creative Suite" },
    { category: "Data & Analytics", skills: "XGBoost, GRU, ARIMA, Variational Mode Decomposition (VMD), FinBERT" },
  ];

  const handleDownloadPDF = () => {
    setIsDownloading(true);

    setTimeout(() => {
      const element = document.getElementById("resume-content");
      if (element) {
        html2canvas(element, { 
          scale: 3, 
          useCORS: true,
          windowWidth: 816, 
          windowHeight: 1056,
          scrollY: 0, // Prevents browser scroll position from clipping the top/bottom
          scrollX: 0
        }).then((canvas) => {
          const imgData = canvas.toDataURL("image/png");
          const pdf = new jsPDF("p", "mm", "letter");
          
          const imgWidth = 215.9; 
          const imgHeight = 279.4; 
          
          pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
          pdf.save("Pramuditha_Nadun_CV.pdf");
          
          setIsDownloading(false);
        });
      }
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gray-200 py-8 px-4 sm:px-6 flex flex-col items-center overflow-auto">
      
      <button
        onClick={handleDownloadPDF}
        disabled={isDownloading}
        className={`mb-6 flex items-center text-white px-6 py-3 rounded-lg transition-shadow shadow-md font-semibold ${
          isDownloading ? 'bg-blue-400 cursor-wait' : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg'
        }`}
      >
        {isDownloading ? (
          "Generating PDF..."
        ) : (
          <>
            <Download className="w-5 h-5 mr-2" />
            Download CV as PDF
          </>
        )}
      </button>

      <div 
        id="resume-content" 
        className={`bg-white shadow-2xl box-border shrink-0 ${isDownloading ? 'overflow-hidden' : 'overflow-hidden sm:rounded-lg'}`}
        style={isDownloading ? { width: '816px', height: '1056px' } : { width: '100%', maxWidth: '816px' }}
      >
        {/* Adjusted padding to p-6 (24px) from p-8 to reclaim vertical space */}
        <div className="p-6 h-full flex flex-col">
          
          {/* Header Section: Tightened margins to mb-4 pb-3 */}
          <div className={`flex mb-4 border-b pb-3 shrink-0 ${isDownloading ? 'items-center flex-row text-left' : 'flex-col md:flex-row items-center text-center md:text-left'}`}>
            <img
              src={personalInfo.image}
              alt={personalInfo.name}
              className={`rounded-full object-cover border-2 border-blue-50 ${isDownloading ? 'w-20 h-20 mr-5 mb-0' : 'w-24 h-24 mb-4 md:w-20 md:h-20 md:mb-0 md:mr-5'}`}
            />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                {personalInfo.name}
              </h1>
              <h2 className="text-base md:text-lg font-semibold text-blue-600 mb-1">
                {personalInfo.title}
              </h2>
              {/* Reduced text size to 10px and tightened line height */}
              <p className="text-gray-600 text-[10px] leading-tight max-w-2xl">
                {personalInfo.intro}
              </p>

              <div className={`flex items-center space-x-3 md:space-x-4 mt-2 flex-wrap gap-y-2 ${isDownloading ? 'justify-start' : 'justify-center md:justify-start'}`}>
                <a href={`https://${personalInfo.github}`} className="text-gray-500 flex items-center text-[10px]">
                  <Github className="w-3 h-3 mr-1" /> {personalInfo.githubUsername}
                </a>
                <a href={`https://${personalInfo.linkedin}`} className="text-gray-500 flex items-center text-[10px]">
                  <Linkedin className="w-3 h-3 mr-1" /> LinkedIn
                </a>
                <a href={`mailto:${personalInfo.email}`} className="text-gray-500 flex items-center text-[10px]">
                  <Mail className="w-3 h-3 mr-1" /> {personalInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className={`grid gap-6 flex-grow ${isDownloading ? 'grid-cols-3' : 'grid-cols-1 md:grid-cols-3'}`}>
            
            {/* Left Column */}
            <div className={`${isDownloading ? 'col-span-1 border-r pr-5' : 'col-span-1 md:border-r md:pr-5 border-b pb-5 md:border-b-0 md:pb-0'}`}>
              <section className="mb-4">
                <h3 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wider border-b-2 border-blue-600 pb-1 inline-block">
                  Contact
                </h3>
                <div className="space-y-1.5">
                  {contactDetails.map((contact, index) => (
                    <div key={index}>
                      <h4 className="text-[9px] font-bold text-gray-400 uppercase">{contact.type}</h4>
                      <p className="text-gray-700 text-[10px] break-all">{contact.value}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-4">
                <h3 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wider border-b-2 border-blue-600 pb-1 inline-block">
                  Skills
                </h3>
                <div className="space-y-2">
                  {technicalSkills.map((skillGroup, index) => (
                    <div key={index}>
                      <h4 className="text-[10px] font-bold text-gray-800">{skillGroup.category}</h4>
                      <p className="text-gray-600 text-[9px] leading-tight">{skillGroup.skills}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wider border-b-2 border-blue-600 pb-1 inline-block">
                  Education
                </h3>
                {education.map((edu, index) => (
                  <div key={index}>
                    <h4 className="text-[10px] font-bold text-gray-900">{edu.degree}</h4>
                    <p className="text-gray-600 text-[9px]">{edu.school}</p>
                    <p className="text-blue-600 font-medium text-[9px]">{edu.year}</p>
                  </div>
                ))}
              </section>
            </div>

            {/* Right Column */}
            <div className={`${isDownloading ? 'col-span-2 pl-1' : 'col-span-1 md:col-span-2 md:pl-1'}`}>
              <section className="mb-4">
                <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider border-b-2 border-blue-600 pb-1 inline-block">
                  Professional Experience
                </h3>
                {experience.map((exp, index) => (
                  <div key={index} className="mb-3 relative pl-3 border-l-2 border-gray-100">
                    <div className="absolute w-2 h-2 bg-blue-600 rounded-full -left-[5px] top-1.5"></div>
                    <div className="flex justify-between items-start mb-0.5">
                      <h4 className="text-[12px] font-bold text-gray-900">{exp.role}</h4>
                      <span className="text-blue-600 font-semibold text-[9px] bg-blue-50 px-2 py-0.5 rounded whitespace-nowrap ml-2">{exp.period}</span>
                    </div>
                    <p className="text-gray-700 font-semibold text-[10px] mb-1.5">{exp.company}</p>
                    <ul className="space-y-1">
                      {exp.description.map((point, i) => (
                        <li key={i} className="text-gray-600 text-[10px] flex items-start leading-tight">
                          <span className="text-blue-600 mr-1.5 mt-0.5">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </section>

              <section>
                <h3 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wider border-b-2 border-blue-600 pb-1 inline-block">
                  Selected Projects
                </h3>
                {projects.map((project, index) => (
                  <div key={index} className="mb-2 bg-gray-50 p-2.5 rounded-lg border border-gray-100">
                    <h4 className="text-[12px] font-bold text-gray-900 mb-0.5">{project.title}</h4>
                    <p className="text-blue-600 text-[8px] font-mono mb-1.5 uppercase tracking-tight">{project.tech}</p>
                    <ul className="space-y-0.5">
                      {project.description.map((point, i) => (
                        <li key={i} className="text-gray-600 text-[10px] flex items-start leading-tight">
                          <span className="text-blue-400 mr-1.5 mt-0.5">•</span>
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