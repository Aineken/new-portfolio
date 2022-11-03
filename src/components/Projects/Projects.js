import React from "react";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
import {
  Card,
  CardTitle,
  MainDiv,
  HR,
  CardImg,
  CardInfo,
  StackInfo,
  TagList,
  Tag,
  CardButtons,
} from "./ProjectsStyled";
import Button from "../../styles/GlobalComponents/Button";

function Projects() {
  return (
    <Section id="project">
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      <MainDiv>
        {projects.map((project, index) => {
          return (
            <Card key={index}>
              <CardImg src={project.image} alt="Projects Image" />
              <CardTitle>{project.title}</CardTitle>
              <HR />
              <CardInfo>{project.description}</CardInfo>
              <StackInfo>
                <CardTitle small>Stack</CardTitle>
                <TagList>
                  {project.tags.map((tag, index) => {
                    return <Tag key={index}>{tag} </Tag>;
                  })}
                </TagList>
              </StackInfo>
              <CardButtons>
                <Button alt>Code</Button>
                <Button alt>Visit</Button>
              </CardButtons>
            </Card>
          );
        })}
      </MainDiv>
    </Section>
  );
}

export default Projects;
