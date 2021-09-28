import styled from "styled-components";
import { Link } from "react-router-dom";

interface ButtonType {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  primary?: boolean;
  dark?: boolean;
  fontBig?: boolean;
  big?: boolean;
  to: string;
}

export const StyledButton = styled(Link)<ButtonType>`
  border-radius: 50px;
  white-space: nowrap;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  background: ${({ primary }) => (primary ? "#01BF71" : "#010606")};

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#01BF71")};
  }
`;
