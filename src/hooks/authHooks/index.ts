import React, { useEffect, useState } from "react";
import * as yup from "yup";

import { SignUpType, SignUpValidType } from "./type.authHook";

export const useValid = () => {
  const [signupData, setSignupData] = useState({});
  const [signupDataValid, setSignupDataValid] = useState<boolean>(true);

  useEffect(() => {
    // if (signupData.length === 0) {
    //   setSignupDataValid(true);
    //   return;
    // }
  }, [signupData]);

  return [signupData, setSignupData, signupDataValid];
};
