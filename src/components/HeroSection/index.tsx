import React from "react";
import mainVideo from "../../assets/video/mainVideo.mp4";
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
import { RouteButton } from "../Button";

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
        <HeroH1>쉽게 관리하는 서비스</HeroH1>
        <HeroP>간단하게 몇번의 클릭으로 모든걸 해결해 보세요</HeroP>
        <HeroBtnWrapper>
          <RouteButton
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            시작하기 {hover ? <ArrowForward /> : <ArrowRight />}
          </RouteButton>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HereoSection;
