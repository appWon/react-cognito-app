import styled from "styled-components";

export const AdminNavContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const AdminNavWrap = styled.div`
  padding: 10px;
`;

export const AdminNavIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 50px;
  height: 50px;

  &:hover {
    border-radius: 15px;
    background-color: gray;
  }

  svg {
    font-size: 30px;
  }
`;
