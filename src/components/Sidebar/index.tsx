import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./style.sidebar";

interface SidbarType {
  isOpen: boolean;
  toggle: () => void;
}

const Sidbar: React.FC<SidbarType> = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="discover" onClick={toggle}>
            Discover
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
            services
          </SidebarLink>
          <SidebarLink to="signup" onClick={toggle}>
            회원가입
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">로그인</SidebarRoute>
        </SideBtnWrap>
      </SideBarWrapper>
    </SidebarContainer>
  );
};

export default Sidbar;
