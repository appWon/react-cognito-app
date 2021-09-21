export interface SignUpType {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  passwordConfirm: string;
}

export interface SignUpValidType {
  name: boolean;
  email: boolean;
  password: boolean;
  phoneNumber: boolean;
  passwordConfirm: boolean;
}
