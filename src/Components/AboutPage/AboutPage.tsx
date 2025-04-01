import React from "react";
import { profileSummary } from "../MockData";

// Example icons for services, replace these with actual icon components or images
import { FaLaptopCode, FaServer, FaDatabase } from "react-icons/fa";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface aboutInt {
  show: boolean;
}

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  background: linear-gradient(to right, #f4f4f4, #f4f4f4);
  color: black;
  text-align: center;
  border-radius: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
    padding: 4rem 6rem;
  }
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
const Logo = styled.img`
  width: 120px; /* Adjust logo size */
  height: auto;
  border-radius: 50%;
  box-shadow: 0 4px 10px rgba(255, 255, 255, 0.2);

  @media (min-width: 768px) {
    width: 180px; /* Larger logo on larger screens */
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
        <div>
          <h1 className="fw-bold">Hi, I'm Sharath Kumar Elumle</h1>
          <h3 className="text-primary">Full Stack Web Developer</h3>
          <p className="text-black">{profileSummary}</p>
          <DownloadButton
            href="src/assets/SharathKumarElumle.pdf"
            download="SharathKumarElumle.pdf"
          >
            <i className="fas fa-download"></i> Download Resume
          </DownloadButton>
        </div>

        <div>
          <Logo src="SE.png" alt="Sharath ELumle Logo" />
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
                <div key={index} className="col-12 col-sm-6 col-md-3 mb-4">
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
