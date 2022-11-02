import React from "react";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyled";

function Hero(props) {
  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          My main purpose is to help aspiring and established developers to take
          their development skills to the next level and build awesome apps.
        </SectionText>
        <Button onClick={() => {}}>Learn More</Button>
      </LeftSection>
    </Section>
  );
}

export default Hero;
