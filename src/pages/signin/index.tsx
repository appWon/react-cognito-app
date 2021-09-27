import React from "react";
import * as S from "./style.signin";
import * as yup from "yup";
import { useFormik } from "formik";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "@material-ui/core";

import { signIn, SignInInfo } from "../../store/auth";
import { authSelector } from "../../store/selector";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = yup.object({
  email: yup.string().email("이메일을 확인해 주세요").required(),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "숫자 . 영문 . 특수문자 조합으로 암호를 입력해주세요 "
    )
    .required(),
});

const Signin: React.FC = ({ location }: any) => {
  const { token } = useSelector(authSelector);

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (signinInfo: SignInInfo) => {
      await dispatch(signIn(signinInfo));
    },
  });

  const { from } = location.state || { from: { pathname: "/" } };
  if (token) {
    return <Redirect to={from} />;
  }

  return (
    <S.SigninContainer>
      <form onSubmit={formik.handleSubmit}>
        <S.InputText
          id="email"
          type="email"
          onChange={formik.handleChange}
          error={Boolean(formik.errors.email && formik.touched.email)}
          label={
            formik.errors.email && formik.values.email
              ? formik.errors.email
              : "이메일"
          }
        />
        <S.InputText
          id="password"
          type="password"
          onChange={formik.handleChange}
          error={Boolean(formik.errors.password && formik.touched.password)}
          label={
            formik.errors.password && formik.values.password
              ? formik.errors.password
              : "암호"
          }
        />
        <Button type="submit" fullWidth variant="contained" color="primary">
          로그인
        </Button>
      </form>
    </S.SigninContainer>
  );
};

export default Signin;
