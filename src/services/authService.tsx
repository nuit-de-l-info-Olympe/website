import { AxiosResponse } from 'axios';
import ApiClient from 'src/utils/apiClient';
import {
  AuthCheckEmailType,
  AuthCoreType,
  AuthForgotPropsType,
  AuthLoginType,
  AuthRegisterEmailType,
  AuthUpdateForgotPasswordPropsType,
} from '../models/auth/AuthModel';
import { apiAuthRouteEnum } from './routes/authRoutes';

// login
const login = async (data: AuthLoginType): Promise<AxiosResponse<any>> =>
  ApiClient.instance.post<AuthCoreType>(`${apiAuthRouteEnum.LOGIN}`, data);

// refreshToken
const refreshToken = async (): Promise<AxiosResponse> =>
  ApiClient.instance.get<AuthCoreType>(`${apiAuthRouteEnum.REFRESH}`);

// logout
const logout = async (): Promise<AxiosResponse> =>
  ApiClient.instance.get<AuthCoreType>(`${apiAuthRouteEnum.LOGOUT}`);

// register
const register = async (data: AuthRegisterEmailType): Promise<AxiosResponse> =>
  ApiClient.instance.post<AuthCoreType>(`${apiAuthRouteEnum.REGISTER}`, data);

// check auth
// const me = (): Promise<AxiosResponse> => {
//   return ApiClient.instance.get<UserCoreType>(`${apiAuthRouteEnum.ME}`);
// };

// // validate email
// const validateEmail = (code: string): Promise<AxiosResponse> => {
//   return ApiClient.instance.get(`${apiAuthRouteEnum.VALIDATE_EMAIL}?code=${code}`);
// };

// // validate email
// const resendEmailCode = (): Promise<AxiosResponse> => {
//   return ApiClient.instance.get(`${apiAuthRouteEnum.RESEND_EMAIL_CODE}`);
// };

// check email
const checkEmail = async (data: AuthCheckEmailType): Promise<AxiosResponse> => {
  return ApiClient.instance.post<AuthCoreType>(`${apiAuthRouteEnum.CHECK_EMAIL}`, data);
};

const forgotPassword = (data: AuthForgotPropsType): Promise<AxiosResponse> => {
  return ApiClient.instance.post(`${apiAuthRouteEnum.FORGOT_PASSWORD}`, data);
};

const updateForgotPassword = (data: AuthUpdateForgotPasswordPropsType): Promise<AxiosResponse> => {
  return ApiClient.instance.post(`${apiAuthRouteEnum.UPDATE_FORGOT_PASSWORD}`, data);
};

const authService = {
  login,
  refreshToken,
  register,
  logout,
  // me,
  checkEmail,
  forgotPassword,
  updateForgotPassword,
  // resendEmailCode,
  // validateEmail,
};

export default authService;
