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

const ExperienceCard: React.FC<{ experience?: Experience }> = ({
  experience,
}) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#ffffff", // white background for the card look
        color: "#333333", // dark text color for better readability
        borderRadius: "10px", // rounded corners
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // soft shadow for depth
        border: "2px solid #000", // black border for the card
      }}
      contentArrowStyle={{ borderRight: "20px solid  #000" }} // arrow color matching the background
      date={experience?.date}
      iconStyle={{
        background: experience?.iconBg,
        borderRadius: "10%",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // adding shadow to the icon
      }}
      icon={
        <div className="d-flex justify-content-center align-items-center w-100 h-100">
          <img
            src={experience?.icon}
            alt={experience?.company_name}
            className="w-100 h-100 object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-dark h5 font-weight-bold">{experience?.title}</h3>
        <p className="text-muted">{experience?.company_name}</p>
      </div>

      <ul className="mt-3 list-unstyled" style={{ color: "#333" }}>
        {experience?.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="point-with-dot text-dark"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience: React.FC = () => {
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
    <section
      id="Experience"
      className="py-5 text-black text-center animate__animated animate__fadeIn"
      style={{
        background: "linear-gradient(135deg,#f4f4f4,#f4f4f4)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
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
    </section>
  );
};

export default Experience;
