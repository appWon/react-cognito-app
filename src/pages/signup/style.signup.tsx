import React, { FC } from "react";
import styled from "styled-components";
import { TextField, StandardTextFieldProps } from "@material-ui/core";

export const InputText: FC<StandardTextFieldProps> = (props) => (
  <TextField variant="outlined" margin="normal" fullWidth {...props} />
);

export const SignupContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
