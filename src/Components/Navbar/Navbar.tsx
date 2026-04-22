import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import {
  Nav,
  NavBrand,
  NavItem,
  NavLinks,
  NavLogo,
  ToggleButton,
} from "../CommonStyling";
import { ThemeContext } from "../../context/ThemeContext";

const Navbar: React.FC = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext)!;

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
            <NavItem className="nav-item ms-3">
              <button 
                onClick={toggleTheme} 
                className="btn btn-sm p-1 rounded-circle theme-toggle-btn"
                title="Toggle dark mode"
                style={{ border: '1px solid var(--border)', background: 'transparent' }}
              >
                {isDark ? <Sun size={20} className="text-warning" /> : <Moon size={20} className="text-primary" />}
              </button>
            </NavItem>
          </NavLinks>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
