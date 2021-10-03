import styled from "styled-components";
import { Link } from "react-router-dom";

interface AdminMenuLinkType {
  subMenu?: boolean;
  fold?: boolean;
}

export const AdminMenuLinkContainer = styled.div<AdminMenuLinkType>`
  width: 250px;
  color: #000000;
  margin-bottom: 10px;
  padding: ${({ subMenu, fold }) =>
    !subMenu ? "5px 10px" : fold ? "5px 10px" : "5px 10px 5px 30px"};

  &:hover {
    background-color: #ede3e3;
  }
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
