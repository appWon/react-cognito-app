import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./style.infoSection";
import { RouteButton } from "../Button";

interface InfoSectionType {
  alt: string;
  id: string;
  lightBg: boolean;
  imgStart: boolean;
  topLine: string;
  lightText: boolean;
  headline: string;
  darkText: boolean;
  description: string;
  buttonLabel: string;
  primary: boolean;
  dark: boolean;
  img: any;
}

const InfoSection: React.FC<InfoSectionType> = ({
  id,
  lightBg,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  primary,
  dark,
  alt,
  img,
}) => {
  return (
    <InfoContainer lightBg={lightBg} id={id}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{headline}</Heading>
              <Subtitle darkText={darkText}>{description}</Subtitle>
              <BtnWrap>
                <RouteButton
                  to="home"
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                >
                  {buttonLabel}
                </RouteButton>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={img} alt={alt} />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default InfoSection;
