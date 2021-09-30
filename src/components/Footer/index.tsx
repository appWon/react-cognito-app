import React from "react";
import { FaGithub } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsitreRights,
  SocialIconLink,
} from "./style.footer";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>예제</FooterLinkTitle>
              <FooterLink to="">예제 리스트1</FooterLink>
              <FooterLink to="">예제 리스트2</FooterLink>
              <FooterLink to="">예제 리스트3</FooterLink>
              <FooterLink to="">예제 리스트4</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>예제2</FooterLinkTitle>
              <FooterLink to="">예제 리스트2-1</FooterLink>
              <FooterLink to="">예제 리스트2-2</FooterLink>
              <FooterLink to="">예제 리스트2-3</FooterLink>
              <FooterLink to="">예제 리스트2-4</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="">...</SocialLogo>
          <WebsitreRights>
            본 사이트는 포트폴리용으로 제작된 사이트입니다.
          </WebsitreRights>
          <SocialIconLink
            href="https://github.com/appWon"
            target="_blank"
            aria-label="Facebook"
          >
            <FaGithub />
          </SocialIconLink>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
