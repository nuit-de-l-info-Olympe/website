export enum apiAuthRouteEnum {
  // auth
  LOGIN = '/v1/auth/email/login',
  LOGOUT = '/v1/auth/email/logout',
  REFRESH = '/v1/auth/token/refresh',
  // account
  ME = '/v1/auth/me',
  REGISTER = '/v1/auth/email/register',
  VALIDATE_EMAIL = '/v1/auth/email/validate',
  RESEND_EMAIL_CODE = '/v1/auth/email/resend-code',
  // check email
  CHECK_EMAIL = '/v1/auth/email/check',
  // forgot password
  FORGOT_PASSWORD = '/v1/auth/forgot-password',
  UPDATE_FORGOT_PASSWORD = '/v1/auth/update-forgot-password',
}
