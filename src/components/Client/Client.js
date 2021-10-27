import React, { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { IconContext } from "react-icons";
import { data, sliderSettings } from "../../data/ClientData";
import { Row, Section } from "../../globalStyles";
import {
  ButtonContainer,
  ReviewSlider,
  ImageWrapper,
  CarouselImage,

} from "./ClientStyles";

const Carousel = () => {
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <Section margin="auto" maxWidth="1280px" inverse>
      <ReviewSlider {...sliderSettings} ref={setSliderRef}>
        {data.map((el, index) => (
          <ImageWrapper key={index}>
            <CarouselImage src={el.image} />
          </ImageWrapper>
        ))}
      </ReviewSlider>

      <Row justify="space-between" wrap="wrap">
        <ButtonContainer>
          <IconContext.Provider value={{ size: "3rem", color: "#1d609c" }}>
            <FaArrowCircleLeft onClick={sliderRef?.slickPrev} />
            <FaArrowCircleRight onClick={sliderRef?.slickNext} />
          </IconContext.Provider>
        </ButtonContainer>
      </Row>
    </Section>
  );
};

export default Carousel;
