import React from "react";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { List, ListItem, ListText, ListTitle } from "./TechnologiesStyled";

import { FiFigma } from "react-icons/fi";
import { FaDatabase, FaReact } from "react-icons/fa";

function Technoligies() {
  return (
    <Section id="tech">
      <SectionDivider />
      <SectionTitle main>Technologies</SectionTitle>
      <SectionText>
        I've worked with a range a technologies in the web development world.{" "}
        <br />
        From Back-end To Design
      </SectionText>

      <List>
        <ListItem>
          <FaReact size="3rem" />
          <ListTitle>Front-End</ListTitle>
          <ListText>
            Experiece with <br />
            React.js
          </ListText>
        </ListItem>
        <ListItem>
          <FaDatabase size="3rem" />
          <ListTitle>Back-End</ListTitle>
          <ListText>
            Experiece with <br />
            Node.js and MongoDB
          </ListText>
        </ListItem>
        <ListItem>
          <FiFigma size="3rem" />
          <ListTitle>UI/UX</ListTitle>
          <ListText>
            Experiece with <br />
            Tools like Figma
          </ListText>
        </ListItem>
      </List>
      <SectionDivider colorAlt />
    </Section>
  );
}

export default Technoligies;
