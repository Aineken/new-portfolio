import React from "react";
import { data } from "../../constants/constants";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Card, CardText, CardTitle } from "./AchievementsStyled";

function Achievements() {
  return (
    <Section>
      <SectionTitle>Personal Achievements</SectionTitle>

      <Box>
        {data.map((d, i) => {
          return (
            <Card key={i}>
              <CardTitle>{d.number}+</CardTitle>
              <CardText>{d.text}</CardText>
            </Card>
          );
        })}
      </Box>
      <SectionDivider />
    </Section>
  );
}

export default Achievements;
