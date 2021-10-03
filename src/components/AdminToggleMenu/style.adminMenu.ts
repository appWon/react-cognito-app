import styled from "styled-components";

export const AdminToggleMenuContainer = styled.div`
  width: 240px;
  color: #000000;
  cursor: pointer;
`;

export const AdminToggleMenuItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 5px 10px;
  color: black;

  &:hover {
    background-color: #ede3e3;
  }
`;

export const AdminToggleMenuIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;

  svg {
    font-size: 30px;
  }
`;

export const AdminToggleMenuText = styled.span`
  margin-left: 10px;
  overflow: hidden;
`;

export const AdminToggleMenuList = styled.div<{ open: number }>`
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease-in-out;
  opacity: ${({ open }) => (open ? "1" : "0")};
  max-height: ${({ open }) => (open ? "100%" : "0")};
`;
