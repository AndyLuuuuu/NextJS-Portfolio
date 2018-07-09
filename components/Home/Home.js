import React from "react";
import {
  Background,
  TextContainer,
  Title,
  TitleSpan,
  FontChange,
  ScrollContainer,
  ScrollInstruction,
  ScrollInstructionArrow
} from "./HomeStyled";
import WhiteArrow from "../../static/icons/arrow-icon white.svg";

const Home = props => {
  return (
    <Background id="Home">
      <TextContainer>
        <Title>
          <FontChange>I am Andy</FontChange>
          <br />
          <TitleSpan>Web Developer</TitleSpan>
          <br />
          <FontChange>Let's Create Something Amazing</FontChange>
        </Title>
      </TextContainer>
      <ScrollContainer>
        <ScrollInstruction
          onClick={() => About.scrollIntoView({ behavior: "smooth" })}
        >
          Let's Begin!
        </ScrollInstruction>
        <ScrollInstructionArrow src={WhiteArrow} />
      </ScrollContainer>
    </Background>
  );
};

export default Home;
