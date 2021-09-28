import React from "react";
import mainVideo from "../videos/testVideo.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./style.heroSection";
import { Button } from "../Button";

const HereoSection = () => {
  const [hover, setHover] = React.useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={mainVideo} />
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>
          Sign up for a new accoun today and receive $250 credit towards your
          newxt payment
        </HeroP>
        <HeroBtnWrapper>
          <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HereoSection;
