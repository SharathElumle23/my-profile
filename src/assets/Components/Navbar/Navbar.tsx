import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled Components
const Nav = styled.nav`
  background-color: #000000;
  color: white;
  padding: 0.5rem 2rem;
`;

const NavBrand = styled(Link)`
  display: flex;
  align-items: center;
`;

const NavLogo = styled.img`
  width: 60px;
  height: 50px;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 1rem;
  margin-bottom: 0;

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;
  }
`;

const NavItem = styled.li`
  .nav-link {
    color: white;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      color: #ccc;
    }
  }
`;

const ToggleButton = styled.button`
  border: none;
  background: #ccc;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const Navbar: React.FC = () => {
  const navData = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Project", to: "/projects" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <Nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <NavBrand className="navbar-brand" to="/">
          <NavLogo src="SE.png" alt="SharathELumle Logo" />
        </NavBrand>
        <ToggleButton
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </ToggleButton>
        <div className="collapse navbar-collapse" id="navbarNav">
          <NavLinks className="navbar-nav ms-auto">
            {navData.map((item, index) => (
              <NavItem key={index} className="nav-item">
                <Link className="nav-link" to={item.to}>
                  {item.name}
                </Link>
              </NavItem>
            ))}
          </NavLinks>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
