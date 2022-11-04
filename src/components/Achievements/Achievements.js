import React from "react";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Card, CardText, CardTitle } from "./AchievementsStyled";

const data = [
  { number: 390, text: "Instagram Followers" },
  { number: 5, text: "Friends" },
  { number: 1, text: "Lovely hobby" },
  { number: 5000, text: "Reason to remember my Name" },
];

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
