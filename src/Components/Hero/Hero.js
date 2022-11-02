import React, { useState, useEffect } from "react";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import BackgroundAnimation from "./BackgroundAnimation";
import { LeftSection } from "./HeroStyled";
// import ReactAnimations from "./ReactAnimations";

function Hero() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const toRotate = ["Developer", "Designer", "Creator"];

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, 500);

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
    if (isDeleting) {
    }
    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
    } else if (isDeleting && updateText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
  };
  return (
    <Section grid>
      <Section row nopadding>
        <LeftSection>
          <SectionTitle main center>
            Welcome To <br />
            My Personal Portfolio
          </SectionTitle>
          <SectionTitle>Web+{text}</SectionTitle>
          <SectionText>
            My main purpose is to help aspiring and established developers to
            take their development skills to the next level and build awesome
            apps.
          </SectionText>
          <Button onClick={() => {}}>Learn More</Button>
        </LeftSection>
      </Section>
      {/* <ReactAnimations /> */}
      <BackgroundAnimation />
    </Section>
  );
}

export default Hero;
