import React, { FC } from "react";
import styled from "styled-components";
import { TextField, StandardTextFieldProps, Button } from "@material-ui/core";

export const InputText: FC<StandardTextFieldProps> = (props) => (
  <TextField variant="outlined" margin="normal" required fullWidth {...props} />
);

export const SigninContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
