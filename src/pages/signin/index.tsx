import React, { useState } from "react";
import * as S from "./style.signin";
import { Button } from "@material-ui/core";

const Signin = () => {
  const [signinData, setSigninData] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setSigninData({ ...signinData, [id]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <S.SigninContainer>
      <form onSubmit={handleSubmit}>
        <S.InputText
          id="email"
          label="이메일 주소"
          type="email"
          onChange={handleChange}
        />
        <S.InputText
          id="password"
          label="비밀번호"
          type="password"
          onChange={handleChange}
        />
        <Button type="submit" fullWidth variant="contained" color="primary">
          로그인
        </Button>
      </form>
    </S.SigninContainer>
  );
};

export default Signin;
