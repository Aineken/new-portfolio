import React, { useState, useEffect } from "react";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, RightSection } from "./HeroStyled";

function Hero({ setShowModal }) {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <>
      <Section id="/">
        <LeftSection>
          <SectionTitle main center>
            Ayan Zhambekov
            <br />
            I'm Web{` ${text}`}
          </SectionTitle>
          <SectionText>
            I am Full Stack Developer Based in Warsaw,Poland. I have developed
            many applications Front-end to Back-end.
          </SectionText>
          <a href="#footer">
            <Button>Contact Me</Button>
          </a>
        </LeftSection>
        <RightSection>
          <div className="circles">
            <div></div>
            <div></div>
            <div></div>
            <span></span>
          </div>
        </RightSection>
      </Section>
    </>
  );
}

export default Hero;
