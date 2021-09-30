import React from "react";
import { LinkButton } from "./style.button";
import { LinkProps } from "react-router-dom";

interface ButtonType extends LinkProps {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  primary?: number;
  fontBig?: boolean;
  dark?: number;
  big?: boolean;
}

export const RouteButton: React.FC<ButtonType> = (props) => {
  return <LinkButton {...props} />;
};
