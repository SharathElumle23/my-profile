import React from "react";
import styled from "styled-components";
import ProjectCard from "../Components/ProjectCard";

const ProjectsSection = styled.section`
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Projects: React.FC = () => {
  return (
    <ProjectsSection>
      <ProjectCard
        title="Project 1"
        description="A description of Project 1."
        imageUrl="https://via.placeholder.com/300"
      />
      <ProjectCard
        title="Project 2"
        description="A description of Project 2."
        imageUrl="https://via.placeholder.com/300"
      />
    </ProjectsSection>
  );
};

export default Projects;
