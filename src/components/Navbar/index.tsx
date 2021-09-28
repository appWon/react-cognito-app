import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./style.navbar";

interface NavbarType {
  toggle: () => void;
}

const Navbar: React.FC<NavbarType> = ({ toggle }) => {
  return (
    <Nav>
      <NavBarContainer>
        <NavLogo to="/">test</NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="about">About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="discover">About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="services">서비스</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="signup">회원가입</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">로그인</NavBtnLink>
        </NavBtn>
      </NavBarContainer>
    </Nav>
  );
};

export default Navbar;
