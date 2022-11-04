import React, { useEffect } from "react";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

import { TimeLineData } from "../../constants/constants";
import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from "./AboutStyled";
import { useState } from "react";
import { useRef } from "react";

function About() {
  const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: "smooth" });
  };

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
      );

      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft /
          (carouselRef.current.scrollWidth * 0.7)) *
          TimeLineData.length
      );

      setActiveItem(index);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <Section>
      <SectionTitle>About</SectionTitle>
      <SectionText>
        The reason of my work is to assist aspiring and set up designers to
        require their advancement abilities to the another level and construct
        magnificent apps.
      </SectionText>
      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        {TimeLineData.map((item, index) => (
          <CarouselMobileScrollNode
            key={index}
            final={index === TOTAL_CAROUSEL_COUNT - 1}
          >
            <CarouselItem
              index={index}
              id={`carousel__item-${index}`}
              active={activeItem}
              onClick={(e) => handleClick(e, index)}
            >
              <CarouselItemTitle>{`${item.year}`}</CarouselItemTitle>

              <CarouselItemText>{item.text}</CarouselItemText>
            </CarouselItem>
          </CarouselMobileScrollNode>
        ))}
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((item, index) => {
          return (
            <CarouselButton
              key={index}
              index={index}
              active={activeItem}
              onClick={(e) => handleClick(e, index)}
              type="button"
            >
              <CarouselButtonDot active={activeItem} />
            </CarouselButton>
          );
        })}
      </CarouselButtons>

      <SectionDivider />
    </Section>
  );
}

export default About;
