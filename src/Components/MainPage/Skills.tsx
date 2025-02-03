import React, { useEffect, useState } from "react";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiPython,
  SiGit,
  SiTypescript,
  SiBootstrap,
  SiMui,
  SiAngular,
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import "animate.css";
const Skills = () => {
  const skills = [
    { name: "HTML", icon: <SiHtml5 />, color: "#E34F26" },
    { name: "CSS", icon: <SiCss3 />, color: "#1572B6" },
    { name: "React", icon: <SiReact />, color: "#61DBFB" },
    { name: "Angular", icon: <SiAngular />, color: "#DD0031" },
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "#68A063" },
    { name: "Python", icon: <SiPython />, color: "#3776AB" },
    { name: "Git", icon: <SiGit />, color: "#F05032" },
    { name: "MarkLogic", icon: <FaDatabase />, color: "#C51F26" },
    { name: "SQL Server", icon: <FaDatabase />, color: "#CC2927" },
    { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3" },
    { name: "Material-UI", icon: <SiMui />, color: "#007FFF" },
  ];

  const [text, setText] = useState("");
  const fullText = "💻 Skills";
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
    <section
      id="skills"
      className="py-5 text-black text-center animate__animated animate__fadeIn"
      style={{
        background: "linear-gradient(135deg,#f4f4f4,#f4f4f4)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div className="container">
        <h2
          className="mb-4 text-uppercase fw-bold position-relative animate__animated animate__fadeInDown"
          style={{
            fontSize: "2.5rem",
            display: "inline-block",
          }}
        >
          {text}
          <div
            className="animated-underline"
            style={{
              width: "100px",
              height: "4px",
              background: "linear-gradient(90deg, #000, #000)",
              margin: "0px 16px 0px 80px",
              borderRadius: "2px",
              animation: "glow 1.5s infinite alternate",
            }}
          ></div>
        </h2>

        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4">
          {skills.map((skill, index) => (
            <div key={index} className="col">
              <div
                className="skill-card"
                style={{
                  background: "rgba(252, 252, 252, 0.1)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "15px",
                  padding: "20px",
                  textAlign: "center",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.1)",
                  borderBottom: `4px solid ${skill.color}`,
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = `0 0 20px ${skill.color}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0px 0px 10px rgba(255, 255, 255, 0.1)";
                }}
              >
                <div
                  className="icon-container"
                  style={{
                    fontSize: "3rem",
                    color: skill.color,
                    marginBottom: "10px",
                    transition: "transform 0.3s ease",
                  }}
                >
                  {skill.icon}
                </div>
                <h5 className="text-black">{skill.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
        @keyframes glow {
          0% { box-shadow: 0px 0px 5px rgba(255, 111, 0, 0.5); }
          100% { box-shadow: 0px 0px 15px rgba(255, 235, 59, 0.8); }
        }
        `}
      </style>
    </section>
  );
};

export default Skills;
