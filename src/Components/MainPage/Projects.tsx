import React, { useEffect, useState } from "react";
import Experience from "./Experience";
import { motion } from "framer-motion";
import { textVariant } from "../../Utils/animation";

interface ProjectInt {
  route: boolean;
}

// src/data/projects.ts

interface ProjectItem {
  title: string;
  description: string[];
  tech: string[];
  github?: string;
  live?: string;
}

const projectList: ProjectItem[] = [
  {
    title: "Sharath AI ChatBot",
    description: [
      "Powered by Artificial Intelligence.A human-like chatbot interface powered by Gemini APIs with animated UI effects and clean React structure.",
    ],
    tech: ["React", "TypeScript", "TailwindCSS", "Vite", "Gemini API"],
    github: "https://github.com/SharathElumle23/chatbotAI",
    live: "https://sharathai.netlify.app/",
  },
  // {
  //   title: "Task Manager App",
  //   description:
  //     "A full-stack productivity tool to manage your daily tasks with a smooth drag-and-drop interface.",
  //   tech: ["React", "Node.js", "MongoDB", "Express"],
  //   github: "https://github.com/your-username/task-manager",
  // },
  {
    title: "Portfolio Website",
    description: [
      "A dynamic React portfolio deployed on Netlify featuring:",

      " Interactive project cards with hover animations",

      " Responsive design using CSS Modules",

      " Smooth page transitions with React Router",

      " Netlify Forms for contact submissions",

      " Optimized performance with lazy loading",
    ],
    tech: ["React", "JavaScript", "Netlify", "Framer Motion"],
    //live: "https://sharathprofile.netlify.app/",
  },
];

const Project: React.FC<ProjectInt> = ({ route }) => {
  const [text, setText] = useState("");
  const fullText = "🚀 My Projects";
  const typingSpeed = 500;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, typingSpeed);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {route && <Experience />}
      <section
        id="Project"
        className="py-5 text-black text-center animate__animated animate__fadeIn"
        style={{
          background: "linear-gradient(135deg,#f4f4f4,#f4f4f4)",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <div className="container my-5">
          <motion.div variants={textVariant()}>
            <h2 className="text-center text-uppercase fw-bold position-relative animate__animated animate__fadeInDown">
              {text}
            </h2>
          </motion.div>

          <div className="row g-4">
            {projectList.map((project, idx) => (
              <div className="col-lg-6" key={idx}>
                <div className="card project-card h-100">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <h5 className="card-title m-0">{project.title}</h5>
                    </div>
                    <p className="card-text">{project.description}</p>
                    <div className="mb-3">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto d-flex">
                      {project.github && (
                        <a
                          href={project.github}
                          className="btn btn-outline-dark btn-sm me-2 d-flex align-items-center"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="bi bi-github me-1"></i> GitHub
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          className="btn btn-primary btn-sm d-flex align-items-center"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="bi bi-box-arrow-up-right me-1"></i> Live
                          Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container text-center mt-5">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card shadow-lg border-0">
                <div className="card-body py-5">
                  <h2 className="card-title fw-bold">
                    🚀 Projects Coming Soon!
                  </h2>
                  <p className="card-text text-muted">
                    I'm currently working on my own project. Stay tuned for
                    exciting updates in this section!
                  </p>
                  <button className="btn btn-primary" disabled>
                    <i className="fas fa-spinner fa-spin"></i> In Progress
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
