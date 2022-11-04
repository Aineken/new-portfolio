import React, { useState, useEffect } from "react";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, RightSection } from "./HeroStyled";
import ReactAnimations from "./ReactAnimations";

function Hero() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const toRotate = ["Developer", "Designer", "Creator"];

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, 135);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updateText);
    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
    } else if (isDeleting && updateText === "") {
      setIsDeleting(false);
      setLoopNum((prev) => prev + 1);
    }
  };

  return (
    <Section>
      <LeftSection>
        <SectionTitle main center>
          Ayan Zhambekov
          <br />
          I'm Web{` ${text}`}
        </SectionTitle>
        <SectionText>
          My main purpose is to help aspiring and established developers to take
          their development skills to the next level and build awesome apps.
        </SectionText>
        <Button onClick={() => {}}>Contact Me</Button>
      </LeftSection>
      <RightSection>
        <ReactAnimations />
      </RightSection>
    </Section>
  );
}

export default Hero;
