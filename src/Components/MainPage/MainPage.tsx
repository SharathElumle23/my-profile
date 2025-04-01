import React from "react";
import Skills from "./Skills";
import "./Common.css";
import Experience from "./Experience";
import Contact from "../ContactCard";
import About from "../AboutPage/AboutPage";

const MainPage: React.FC = () => {
  return (
    <div>
      <About show={false} />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
};

export default MainPage;
