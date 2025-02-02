import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem;
  max-width: 300px;
  text-align: center;
`;

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <Card>
      <img
        src={imageUrl}
        alt={title}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <h3>{title}</h3>
      <p>{description}</p>
    </Card>
  );
};

export default ProjectCard;
