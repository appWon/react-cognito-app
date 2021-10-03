import styled, { css } from "styled-components";
import { Link, LinkProps } from "react-router-dom";

interface AdminMenuLinkType extends LinkProps {
  location: string;
  subMenu?: boolean;
  fold?: boolean;
}

export const AdminMenuLinkContainer = styled.div<AdminMenuLinkType>`
  position: relative;
  width: 240px;
  color: #000000;
  margin-bottom: 10px;
  padding: ${({ subMenu, fold }) =>
    !subMenu ? "5px 10px" : fold ? "5px 10px" : "5px 10px 5px 30px"};

  &:hover {
    background-color: #ede3e3;
  }

  ${({ location, to }) =>
    location === to &&
    css`
      &::after {
        content: "";
        position: absolute;
        height: 100%;
        width: 5px;
        left: 0;
        top: 0;
        background: red;
      }
    `};
`;

export const AdminMenuLinkWrap = styled(Link)`
  display: flex;
  align-items: center;
  color: black;
  text-decoration: none;
`;

export const AdminMenuIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 50px;
  height: 50px;

  svg {
    font-size: 30px;
  }
`;

export const AdminMenuText = styled.span`
  margin-left: 10px;
  overflow: hidden;
`;
