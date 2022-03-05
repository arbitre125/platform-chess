import {
  loginUser,
  logout,
  signUpUser,
  confirmEmail,
  userPasswordForgot,
  userPasswordForgotSubmit,
  resendActivationCode,
  isPaidMember,
  subscribe,
  isAdmin
} from "./actions";
import { AuthProvider, useAuthDispatch, useAuthState } from "./context";

export {
  AuthProvider,
  useAuthState,
  useAuthDispatch,
  loginUser,
  signUpUser,
  confirmEmail,
  resendActivationCode,
  userPasswordForgot,
  userPasswordForgotSubmit,
  logout,
  isPaidMember,
  subscribe,
  isAdmin
};
