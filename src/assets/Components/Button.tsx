import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
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
