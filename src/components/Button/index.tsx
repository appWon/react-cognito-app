import React from "react";
import { StyledButton } from "./style.button";

interface ButtonType {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  primary?: boolean;
  dark?: boolean;
  fontBig?: boolean;
  big?: boolean;
  to: string;
}

export const Button: React.FC<ButtonType> = (props) => {
  return <StyledButton {...props} />;
};
