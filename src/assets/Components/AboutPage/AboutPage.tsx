import React from "react";
import styled from "styled-components";

const AboutSection = styled.section`
  padding: 2rem;
  text-align: center;
`;

const About: React.FC = () => {
  return (
    <AboutSection>
      <h2>About Me</h2>
      <p>
        I have 5 years of experience in web development and love working with
        React and TypeScript.
      </p>
    </AboutSection>
  );
};

export default About;
