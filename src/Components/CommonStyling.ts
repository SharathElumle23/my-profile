import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled Components
export const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  padding: 0.5rem 2rem;
  transition: background-color 0.3s ease, color 0.3s ease;
`;

export const NavBrand = styled(Link)`
  display: flex;
  align-items: center;
`;

export const NavLogo = styled.img`
  width: 60px;
  height: 50px;
`;

export const NavLinks = styled.ul`
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

export const NavItem = styled.li`
  .nav-link {
    color: var(--text-primary);
    text-decoration: none;
    font-weight: 500;

    &:hover {
      color: var(--text-secondary);
    }
  }
`;

export const ToggleButton = styled.button`
  border: none;
  background: #ccc;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
