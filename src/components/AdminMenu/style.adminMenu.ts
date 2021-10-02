import styled from "styled-components";
import { List, ListProps } from "@material-ui/core";
import { Link } from "react-router-dom";

interface MenuProps extends ListProps {
  component?: string;
}

export const Menu = styled(List)<MenuProps>`
  width: 100%;
  max-width: 240px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Item = styled(Link)``;
