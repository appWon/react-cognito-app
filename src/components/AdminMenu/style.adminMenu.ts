import styled from "styled-components";

interface AdminMenuWrapType {
  fold: Boolean;
}

export const AdminMenuWrap = styled.aside<AdminMenuWrapType>`
  display: flex;
  flex-direction: column;
  transition: 0.5s ease-in-out;
  border-right: 1px solid black;
  white-space: nowrap;
  overflow: hidden;
  width: ${({ fold }) => (fold ? "70px" : "240px")};
`;
