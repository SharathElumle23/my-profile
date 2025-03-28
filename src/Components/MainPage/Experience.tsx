import React, { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

// Assuming your experience data will be provided as an array
const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Infosys Ltd",
    date: "2022 Feb - Present",
    icon: "/infosysLogo.webp",
    iconBg: "#FFF",
    points: [
      "Developing and maintaining web applications using React.js and other modern frontend technologies.",

      "Collaborating with cross-functional teams including designers, product managers, and other developers to deliver high-quality, user-centric products.",

      "Implementing responsive web designs, ensuring cross-browser compatibility, and optimizing user interfaces for both desktop and mobile devices.",

      "Writing clean, efficient, and reusable code while adhering to best practices in version control using Git.",

      "Participating in Agile development processes, attending sprint meetings, and delivering features within project timelines.",
    ],
  },
  // Add other experiences as needed
];
// Define the type for the `experience` prop
interface Experience {
  title: string;
  company_name: string;
  date: string;
  icon: string;
  iconBg: string;
  points: string[];
}
const textVariant = (delay?: undefined) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
      }}
      date={experience.date}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="d-flex justify-content-center align-items-center w-100 h-100">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-75 h-75 object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white h5 font-weight-bold">{experience.title}</h3>
        <p className="text-secondary">{experience.company_name}</p>
      </div>

      <ul className="mt-3 list-unstyled" style={{ color: "#FFF" }}>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="point-with-dot text-white-100 text-sm"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const [text, setText] = useState("");
  const fullText = "💼 Work Experience";
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
    <div className="container mt-2 ">
      <motion.div variants={textVariant()}>
        <h2 className="text-center text-uppercase fw-bold position-relative animate__animated animate__fadeInDown">
          {text}
        </h2>
      </motion.div>

      <div className="mt-5">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
