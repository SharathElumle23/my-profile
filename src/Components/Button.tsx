import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  background: var(--primary-gradient);
  color: var(--bg-primary);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: var(--text-secondary);
  }
`;

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
