import React from "react";
import * as S from "./style.signin";
import * as yup from "yup";
import { useFormik } from "formik";
import { Button } from "@material-ui/core";

import { cognitoSignUp } from "../../lib/cognito";

const initialValues = {
  email: "",
  password: "",
  passwordConfirm: "",
  name: "",
  phoneNumber: "",
};

const validationSchema = yup.object({
  name: yup
    .string()
    .matches(/^[가-힣]{2,4}$/, "이름을 확인해주세요.")
    .required(),
  email: yup.string().email("이메일을 확인해 주세요").required(),
  phoneNumber: yup
    .string()
    .matches(
      /^01([0|1|6|7|8|9]?)([0-9]{3,4})([0-9]{4})$/,
      "핸드폰 번호가 잘못 되었습니다."
    )
    .required(),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "숫자 . 영문 . 특수문자 조합으로 암호를 입력해주세요 "
    )
    .required(),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "암호가 다릅니다.")
    .required(),
});

const Signup: React.FC = () => {
  const { values, errors, handleSubmit, handleChange, touched } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      try {
        const result = await cognitoSignUp(values);

        console.log(result);
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <S.SignupContainer>
      <form onSubmit={handleSubmit}>
        <S.InputText
          id="email"
          type="text"
          onChange={handleChange}
          error={Boolean(errors.email && touched.email)}
          label={errors.email && values.email ? errors.email : "이메일"}
        />
        <S.InputText
          id="password"
          type="password"
          onChange={handleChange}
          error={Boolean(errors.password && touched.password)}
          label={errors.password && values.password ? errors.password : "암호"}
        />
        <S.InputText
          id="passwordConfirm"
          type="password"
          onChange={handleChange}
          error={Boolean(errors.passwordConfirm && touched.passwordConfirm)}
          label={
            errors.passwordConfirm && values.passwordConfirm
              ? errors.passwordConfirm
              : "암호 확인"
          }
        />
        <S.InputText
          id="name"
          type="text"
          onChange={handleChange}
          error={Boolean(errors.name && touched.name)}
          label={errors.name && values.name ? errors.name : "이름"}
        />
        <S.InputText
          id="phoneNumber"
          type="text"
          onChange={handleChange}
          error={Boolean(errors.phoneNumber && touched.phoneNumber)}
          label={
            errors.phoneNumber && values.phoneNumber
              ? errors.phoneNumber
              : "핸드폰 번호"
          }
        />
        <Button type="submit" color="primary" variant="contained" fullWidth>
          회원가입
        </Button>
      </form>
    </S.SignupContainer>
  );
};

export default Signup;
