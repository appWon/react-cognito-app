import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";

interface type {
  isOpen: boolean;
}

export const SidebarContainer = styled.aside<type>`
  display: grid;
  align-items: center;
  position: fixed;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0d0d0d;
  transition: 0.3s ease-in-out;
  z-index: 100;
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  outline: none;
  cursor: pointer;
  font-size: 2rem;
  background: transparent;
`;

export const SideBarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  text-align: center;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2 ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(LinkRouter)`
  padding: 16px 64px;
  border-radius: 50px;
  background-color: #01bf71;
  white-space: nowrap;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2 ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #fff;
    color: #010505;
  }
`;
