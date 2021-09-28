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
import { Button } from "react-scroll";

const InfoSection = () => {
  return (
    <InfoContainer lightBg>
      <InfoWrapper>
        <InfoRow imgStart>
          <Column1>
            <TextWrapper>
              <TopLine>TopLine</TopLine>
              <Heading lightText>Heading</Heading>
              <Subtitle darkText>Subtitle</Subtitle>
              <BtnWrap>
                <Button to="home" />
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default InfoSection;
