import React from "react";
import styled from "styled-components";
import { profileSummary } from "../MockData";
import Skills from "./Skills";
import "./Common.css";
import Experience from "./Experience";
import Contact from "../ContactCard";

const MainPage: React.FC = () => {
  const HeroSection = styled.section`
    display: flex;
    flex-direction: column; /* Stack content vertically on small screens */
    align-items: center;
    padding: 2rem;
    background-color: #f4f4f4;
    text-align: center; /* Center text on small screens */

    @media (min-width: 768px) {
      flex-direction: row; /* Side-by-side layout on larger screens */
      justify-content: space-between;
      text-align: left; /* Align text to the left on larger screens */
    }
  `;

  const DownloadButton = styled.a`
    display: inline-block;
    padding: 12px 24px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
    margin-top: 1rem; /* Add spacing above the button */

    &:hover {
      background-color: #0056b3;
      transform: translateY(-2px);
    }

    &:active {
      background-color: #004080;
      transform: translateY(0);
    }

    i {
      margin-right: 8px;
    }
  `;

  const Logo = styled.img`
    width: 100px; /* Adjust logo size */
    height: auto; /* Maintain aspect ratio */

    @media (min-width: 768px) {
      width: 150px; /* Larger logo on larger screens */
    }
  `;

  return (
    <div>
      <HeroSection>
        <div>
          <h1 style={{ fontWeight: "bold" }}>Hi, I am Sharath Kumar Elumle</h1>
          <h3>Full Stack Web Developer</h3>
          <h6>{profileSummary}</h6>
          <DownloadButton
            href="src/assets/SharathKumarElumle.pdf"
            download="SharathKumarElumle.pdf"
          >
            <i className="fas fa-download"></i> Download Resume
          </DownloadButton>
        </div>
        <div>
          <div className="navbar-brand">
            <Logo src="SE.png" alt="SharathELumle Logo" />
          </div>
        </div>
      </HeroSection>
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
};

export default MainPage;
