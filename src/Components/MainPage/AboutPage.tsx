import React from "react";
import { profileSummary, profileSummaryAbout } from "../MockData";

// Example icons for services, replace these with actual icon components or images
import { FaLaptopCode, FaServer, FaDatabase } from "react-icons/fa";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface aboutInt {
  show: boolean;
}

const HeroSection = styled.section`
  padding: 3rem 1rem;
  border-radius: 1rem;
  margin-bottom: 0rem;
  background: linear-gradient(135deg, #f4f4f4, #f4f4f4); /* subtle gradient */
  font-family: "Poppins", sans-serif;
  color: black;
`;

const DownloadButton = styled.a`
  display: inline-block;
  padding: 12px 24px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background-color: #0d6efd;
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-top: 1.5rem; /* More spacing */

  &:hover {
    background-color: rgb(1, 228, 69);
    transform: translateY(-3px);
  }

  &:active {
    background-color: #cc8800;
    transform: translateY(0);
  }

  i {
    margin-right: 10px;
  }
`;

const LogoWrapper = styled.div`
  position: relative;
  width: 340px;
  height: 340px;
  margin: auto;
  border-radius: 50%;
  overflow: hidden;
  animation: pulseGlow 6s ease-in-out infinite;

  @media (min-width: 768px) {
    width: 420px;
    height: 420px;
  }

  &::before {
    content: "";
    position: absolute;
    inset: -10px;
    border-radius: 50%;
    background: conic-gradient(from 0deg, #0d6efd, #6610f2, #6f42c1, #0d6efd);
    animation: rotateGradient 8s linear infinite;
    z-index: 1;
    filter: blur(12px);
    opacity: 0.8;
  }

  img {
    position: absolute;
    top: 20px;
    left: 20px;
    width: calc(100% - 40px);
    height: calc(100% - 40px);
    object-fit: cover;
    border-radius: 50%;
    z-index: 2;
    border: 6px solid white;
    animation: floatUpDown 5s ease-in-out infinite,
      fadeIn 1.5s ease-out forwards;
  }

  @keyframes rotateGradient {
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes floatUpDown {
    0%,
    100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-12px);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes pulseGlow {
    0%,
    100% {
      box-shadow: 0 0 25px rgba(13, 110, 253, 0.6),
        0 0 50px rgba(102, 16, 242, 0.4);
    }
    50% {
      box-shadow: 0 0 50px rgba(13, 110, 253, 0.8),
        0 0 80px rgba(102, 16, 242, 0.6);
    }
  }
`;

const About: React.FC<aboutInt> = ({ show }) => {
  const services = [
    {
      title: "Web Developer",
      icon: <FaLaptopCode />,
    },
    {
      title: "Backend Developer",
      icon: <FaServer />,
    },
    {
      title: "DataBase Developer",
      icon: <FaDatabase />,
    },
  ];

  return (
    <>
      <HeroSection>
        <div className="row align-items-center w-100">
          {/* Text Section - on the left */}
          <div className="col-md-7 order-2 order-md-1">
            <h1 className="fw-bold">Hi, I'm Sharath Kumar Elumle</h1>
            <h3 className="text-primary">Full Stack Web Developer</h3>
            {show
              ? profileSummaryAbout.map((profile: string, index: number) => (
                  <p key={index} className="text-secondary">
                    {profile}
                  </p>
                ))
              : profileSummary.map((profile: string, index: number) => (
                  <p key={index} className="text-secondary">
                    {profile}
                  </p>
                ))}
            <DownloadButton
              href="/SharathElmle.pdf"
              download="SharathKumarElumle.pdf"
              className="mt-3"
            >
              <i className="fas fa-download"></i> Download Resume
            </DownloadButton>
          </div>

          {/* Image Section - on the right */}
          <div className="col-md-5 text-center order-1 order-md-2 mb-4 mb-md-0">
            <LogoWrapper>
              <img src="sharathprofile.png" alt="Sharath Elumle" />
            </LogoWrapper>
          </div>
        </div>
      </HeroSection>

      {show && (
        <div
          style={{
            background: "linear-gradient(to right, #f4f4f4, #f4f4f4)",
          }}
        >
          <div className="container py-6">
            <div className="row text-center">
              {services.map((service, index) => (
                <div key={index} className="col-12 col-sm-6 col-md-4 mb-4">
                  <div
                    className="service-card p-4 shadow rounded border"
                    style={{
                      border: "2px solidrgb(5, 6, 8)",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    <div
                      className="mb-3"
                      style={{ fontSize: "2rem", color: "#0d6efd" }}
                    >
                      {service.icon}
                    </div>
                    <h4>{service.title}</h4>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5">
              <h2 className="fw-bold">Connect With Me</h2>
              <p className="text-muted">
                Feel free to reach out via social media or email!
              </p>

              {/* Social Media Links */}
              <div className="d-flex justify-content gap-4 mt-3">
                <a
                  href="https://www.linkedin.com/in/sharath-elumle-b60272129/"
                  className="text-primary fs-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://github.com/SharathElumle23/SharathElumle23"
                  className="text-dark fs-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="mailto:sharathelumle23@gmail.com?subject=Hello%20Sharath&body=Hi%2C%20I%20would%20like%20to%20connect%20with%20you."
                  className="text-danger fs-3"
                >
                  <i className="fas fa-envelope"></i>
                </a>
                <a
                  href="https://x.com/sharath_elumle"
                  className="text-info fs-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </div>

              {/* Contact Button */}
              <Link to="/contact" className="btn btn-primary mt-4">
                <i className="fas fa-paper-plane"></i> Contact Me
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
