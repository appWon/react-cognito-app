import styled from "styled-components";

interface AdminMenuLinkType {
  subMenu?: boolean;
}

export const AdminMenuLinkContainer = styled.div<AdminMenuLinkType>`
  width: 100%;
  color: #000000;
  text-decoration: none;
  padding-left: ${({ subMenu }) => subMenu && "10px"};
`;
