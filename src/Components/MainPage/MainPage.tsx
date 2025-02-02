import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { profileSummary } from "../MockData";

const MainPage: React.FC = () => {
  const HeroSection = styled.section`
    align-items: center;
    padding: 2rem;
    background-color: #f4f4f4;
    display: flex;
    justify-content: flex-start;
  `;

  return (
    <div>
      <HeroSection>
        <div>
          <h1 style={{ fontWeight: "bold" }}>Hi, I am Sharath Kumar Elumle</h1>
          <h3>Full Stack Web Developer</h3>
          <h6>{profileSummary}</h6>
          <Button onClick={() => alert("Learn More!")}>Resume Download</Button>
        </div>
        <div>
          <div className="navbar-brand">
            <img src="SE.png" alt="SharathELumle Logo" />
          </div>
        </div>
      </HeroSection>
    </div>
  );
};

export default MainPage;
