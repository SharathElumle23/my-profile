import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  text-align: center;
  padding: 1rem;
  background-color: #333;
  color: white;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>&copy; 2023 My Portfolio. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
