import React from "react";
import styled from "styled-components";
import Button from "../Components/Button";

const ContactSection = styled.section`
  padding: 2rem;
  text-align: center;
`;

const Contact: React.FC = () => {
  return (
    <ContactSection>
      <h2>Contact Me</h2>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message" />
        <Button type="submit">Send</Button>
      </form>
    </ContactSection>
  );
};

export default Contact;
