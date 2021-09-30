import React from "react";
import { authSelector } from "../../store/selector";
import { animateScroll as scroll } from "react-scroll";
import { useSelector, useDispatch } from "react-redux";
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
  LinkButton,
  Button,
} from "./style.navbar";
import { signOut } from "../../store/auth";

interface NavbarType {
  toggle: () => void;
}

const Navbar: React.FC<NavbarType> = ({ toggle }) => {
  const [scrollNav, setScrollNav] = React.useState(false);
  const { token } = useSelector(authSelector);

  const dispatch = useDispatch();

  const viewHome = () => {
    scroll.scrollToTop();
  };

  const handleClickSignOut = () => {
    dispatch(signOut());
  };

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <Nav scrollNav={scrollNav}>
      <NavBarContainer>
        <NavLogo to="/" onClick={viewHome}>
          JJ Web
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="about" smooth spy duration={500} offset={-80}>
              About
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="discover" smooth spy duration={500} offset={-80}>
              About
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="otherServices" smooth spy duration={500} offset={-80}>
              서비스
            </NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          {!token ? (
            <LinkButton to="/signin">로그인</LinkButton>
          ) : (
            <Button onClick={handleClickSignOut}>로그아웃</Button>
          )}
        </NavBtn>
      </NavBarContainer>
    </Nav>
  );
};

export default Navbar;
