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
    address: "63/9,Gallage Mawatha, Mirihana, Nugegoda, Sri Lanka",
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
          scrollY: 0,
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
    }, 600);
  };

  return (
    // Softer background for modern web feel
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 md:py-12 flex flex-col items-center overflow-auto font-sans text-slate-800">
      
      {/* Modernized Download Button */}
      <button
        onClick={handleDownloadPDF}
        disabled={isDownloading}
        className={`mb-8 flex items-center text-white px-8 py-3.5 rounded-full transition-all duration-300 font-semibold shadow-lg ${
          isDownloading 
            ? 'bg-blue-400 cursor-wait shadow-none' 
            : 'bg-blue-600 hover:bg-blue-700 hover:shadow-blue-500/30 hover:-translate-y-0.5 active:scale-95'
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

      {/* Main Container */}
      <div 
        id="resume-content" 
        className={`bg-white box-border shrink-0 transition-all duration-300 ${
          isDownloading 
            ? 'overflow-hidden rounded-none shadow-none' 
            : 'overflow-hidden rounded-2xl shadow-xl border border-slate-100/50'
        }`}
        style={isDownloading ? { width: '816px', height: '1056px' } : { width: '100%', maxWidth: '900px' }}
      >
        <div className={`${isDownloading ? 'p-6' : 'p-8 sm:p-10 md:p-12'} h-full flex flex-col`}>
          
          {/* Header Section */}
          <div className={`flex shrink-0 ${isDownloading ? 'mb-4 border-b pb-3 items-center flex-row text-left' : 'mb-8 md:mb-10 border-b border-slate-100 pb-8 flex-col md:flex-row items-center text-center md:text-left'}`}>
            <img
              src={personalInfo.image}
              alt={personalInfo.name}
              className={`rounded-full object-cover border-2 border-slate-100 shadow-sm ${
                isDownloading ? 'w-20 h-20 mr-5 mb-0' : 'w-32 h-32 mb-5 md:w-28 md:h-28 md:mb-0 md:mr-8'
              }`}
            />
            <div>
              <h1 className={`font-bold text-slate-900 tracking-tight ${isDownloading ? 'text-2xl' : 'text-3xl md:text-4xl'}`}>
                {personalInfo.name}
              </h1>
              <h2 className={`font-semibold text-blue-600 ${isDownloading ? 'text-base mb-1' : 'text-lg md:text-xl mb-3 mt-1'}`}>
                {personalInfo.title}
              </h2>
              <p className={`text-slate-600 max-w-2xl ${isDownloading ? 'text-[10px] leading-tight' : 'text-sm md:text-base leading-relaxed'}`}>
                {personalInfo.intro}
              </p>

              {/* Social Links */}
              <div className={`flex items-center flex-wrap gap-y-2 ${isDownloading ? 'space-x-4 mt-2 justify-start' : 'gap-x-4 sm:gap-x-6 mt-5 justify-center md:justify-start'}`}>
                <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className={`flex items-center leading-none text-slate-500 hover:text-blue-600 transition-colors ${isDownloading ? 'text-[10px]' : 'text-sm font-medium'}`}>
                  <Github className={`${isDownloading ? 'w-3 h-3 mr-1 shrink-0' : 'w-4 h-4 mr-2'}`} /> 
                  <span className={isDownloading ? "-mt-[1px]" : ""}>{personalInfo.githubUsername}</span>
                </a>
                <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className={`flex items-center leading-none text-slate-500 hover:text-blue-600 transition-colors ${isDownloading ? 'text-[10px]' : 'text-sm font-medium'}`}>
                  <Linkedin className={`${isDownloading ? 'w-3 h-3 mr-1 shrink-0' : 'w-4 h-4 mr-2'}`} /> 
                  <span className={isDownloading ? "-mt-[1px]" : ""}>LinkedIn</span>
                </a>
                <a href={`mailto:${personalInfo.email}`} className={`flex items-center leading-none text-slate-500 hover:text-blue-600 transition-colors ${isDownloading ? 'text-[10px]' : 'text-sm font-medium'}`}>
                  <Mail className={`${isDownloading ? 'w-3 h-3 mr-1 shrink-0' : 'w-4 h-4 mr-2'}`} /> 
                  <span className={isDownloading ? "-mt-[1px]" : ""}>{personalInfo.email}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className={`grid flex-grow ${isDownloading ? 'gap-6 grid-cols-3' : 'gap-8 md:gap-10 grid-cols-1 md:grid-cols-3'}`}>
            
            {/* Left Column */}
            <div className={`${isDownloading ? 'col-span-1 border-r border-slate-200 pr-5' : 'col-span-1 md:border-r md:border-slate-100 md:pr-8 border-b border-slate-100 pb-8 md:border-b-0 md:pb-0'}`}>
              <section className={isDownloading ? 'mb-4' : 'mb-8'}>
                <h3 className={`font-bold text-slate-900 uppercase tracking-wider border-b-2 border-blue-500 inline-block ${isDownloading ? 'text-sm mb-2 pb-1' : 'text-base mb-4 pb-1.5'}`}>
                  Contact
                </h3>
                <div className={isDownloading ? 'space-y-1.5' : 'space-y-3'}>
                  {contactDetails.map((contact, index) => (
                    <div key={index}>
                      <h4 className={`font-bold text-slate-400 uppercase tracking-wide ${isDownloading ? 'text-[9px]' : 'text-xs mb-0.5'}`}>{contact.type}</h4>
                      <p className={`text-slate-700 break-all ${isDownloading ? 'text-[10px]' : 'text-sm font-medium'}`}>{contact.value}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className={isDownloading ? 'mb-4' : 'mb-8'}>
                <h3 className={`font-bold text-slate-900 uppercase tracking-wider border-b-2 border-blue-500 inline-block ${isDownloading ? 'text-sm mb-2 pb-1' : 'text-base mb-4 pb-1.5'}`}>
                  Skills
                </h3>
                <div className={isDownloading ? 'space-y-2' : 'space-y-5'}>
                  {technicalSkills.map((skillGroup, index) => (
                    <div key={index}>
                      <h4 className={`font-bold text-slate-800 ${isDownloading ? 'text-[10px]' : 'text-sm mb-1'}`}>{skillGroup.category}</h4>
                      <p className={`text-slate-600 ${isDownloading ? 'text-[9px] leading-tight' : 'text-sm leading-relaxed'}`}>{skillGroup.skills}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h3 className={`font-bold text-slate-900 uppercase tracking-wider border-b-2 border-blue-500 inline-block ${isDownloading ? 'text-sm mb-2 pb-1' : 'text-base mb-4 pb-1.5'}`}>
                  Education
                </h3>
                {education.map((edu, index) => (
                  <div key={index} className={isDownloading ? '' : 'mb-4'}>
                    <h4 className={`font-bold text-slate-900 ${isDownloading ? 'text-[10px]' : 'text-sm mb-1'}`}>{edu.degree}</h4>
                    <p className={`text-slate-600 ${isDownloading ? 'text-[9px]' : 'text-sm'}`}>{edu.school}</p>
                    <p className={`text-blue-600 font-semibold ${isDownloading ? 'text-[9px]' : 'text-sm mt-0.5'}`}>{edu.year}</p>
                  </div>
                ))}
              </section>
            </div>

            {/* Right Column */}
            <div className={`${isDownloading ? 'col-span-2 pl-1' : 'col-span-1 md:col-span-2'}`}>
              <section className={isDownloading ? 'mb-4' : 'mb-10'}>
                <h3 className={`font-bold text-slate-900 uppercase tracking-wider border-b-2 border-blue-500 inline-block ${isDownloading ? 'text-sm mb-3 pb-1' : 'text-lg mb-6 pb-1.5'}`}>
                  Professional Experience
                </h3>
                {experience.map((exp, index) => (
                  <div key={index} className={`relative border-l-2 border-slate-100 ${isDownloading ? 'mb-3 pl-3' : 'mb-8 pl-5'}`}>
                    <div className={`absolute bg-blue-600 rounded-full ${isDownloading ? 'w-2 h-2 -left-[5px] top-1.5' : 'w-3 h-3 -left-[7px] top-1.5 ring-4 ring-white'}`}></div>
                    
                    <div className={`flex justify-between items-center ${isDownloading ? 'mb-0.5' : 'mb-1.5 flex-wrap gap-2'}`}>
                      <h4 className={`font-bold text-slate-900 leading-none ${isDownloading ? 'text-[12px]' : 'text-lg'}`}>{exp.role}</h4>
                      <span 
                        className={`text-blue-600 font-bold bg-blue-50 rounded flex items-center justify-center whitespace-nowrap leading-none ${
                          isDownloading ? 'text-[9px] px-2.5 h-5 ml-2' : 'text-xs px-3 py-1.5'
                        }`}
                      >
                        {exp.period}
                      </span>
                    </div>
                    <p className={`text-slate-700 font-semibold ${isDownloading ? 'text-[10px] mb-1.5' : 'text-sm mb-3'}`}>{exp.company}</p>
                    <ul className={isDownloading ? 'space-y-1' : 'space-y-2'}>
                      {exp.description.map((point, i) => (
                        <li key={i} className={`text-slate-600 flex items-start ${isDownloading ? 'text-[10px] leading-tight' : 'text-sm leading-relaxed'}`}>
                          <span className={`text-blue-500 mr-2 ${isDownloading ? 'mt-0.5' : 'mt-1'}`}>•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </section>

              <section>
                <h3 className={`font-bold text-slate-900 uppercase tracking-wider border-b-2 border-blue-500 inline-block ${isDownloading ? 'text-sm mb-2 pb-1' : 'text-lg mb-6 pb-1.5'}`}>
                  Selected Projects
                </h3>
                <div className={isDownloading ? '' : 'grid gap-4'}>
                  {projects.map((project, index) => (
                    <div 
                      key={index} 
                      className={`bg-slate-50 border border-slate-100 ${
                        isDownloading 
                          ? 'mb-2 p-2.5 rounded-lg' 
                          : 'p-5 rounded-xl hover:shadow-md hover:border-slate-200 transition-all duration-300'
                      }`}
                    >
                      <h4 className={`font-bold text-slate-900 ${isDownloading ? 'text-[12px] mb-0.5' : 'text-base mb-1'}`}>{project.title}</h4>
                      <p className={`text-blue-600 font-mono uppercase tracking-tight ${isDownloading ? 'text-[8px] mb-1.5' : 'text-xs mb-3 font-semibold'}`}>{project.tech}</p>
                      <ul className={isDownloading ? 'space-y-0.5' : 'space-y-1.5'}>
                        {project.description.map((point, i) => (
                          <li key={i} className={`text-slate-600 flex items-start ${isDownloading ? 'text-[10px] leading-tight' : 'text-sm leading-relaxed'}`}>
                            <span className={`text-blue-400 mr-2 ${isDownloading ? 'mt-0.5' : 'mt-1.5 text-xs'}`}>•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;