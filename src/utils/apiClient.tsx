import axios, { AxiosResponse } from 'axios';
import { getSession, signOut } from 'next-auth/react';
import { PUBLIC_API_HOST } from 'src/config-global';
import { apiAuthRouteEnum } from 'src/services/routes/authRoutes';

const ApiClient = () => {
  const defaultOptions = {
    baseURL: PUBLIC_API_HOST,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const instance = axios.create(defaultOptions);

  // instance.interceptors.request.use(async (request) => {
  //   const session = await getSession({ broadcast: true });

  //   if (request?.headers && session) {
  //     request.headers.Authorization = `Bearer ${(session as any).accessToken}`;
  //   }

  //   return request;
  // });

  instance.interceptors.response.use(
    (response: AxiosResponse): AxiosResponse => response,
    async (error) => {
      const originalConf = error.config;

      if (error.response?.status === 401) {
        if (!originalConf._retry && originalConf.url !== apiAuthRouteEnum.REFRESH) {
          originalConf._retry = true;

          const session = await getSession({ broadcast: true });

          if (session) {
            return instance(originalConf);
          }
        }
      }
      // Refresh token failed signout user
      // await signOut();
      return Promise.reject(error);
    }
  );

  const setApiHeaderToken = (token: string) => {
    if (token) {
      instance.defaults.headers.Authorization = `Bearer ${token}`;
    } else {
      delete instance.defaults.headers.Authorization;
    }
  };

  const api = {
    instance,
    setApiHeaderToken,
  };
  return api;
};

export default ApiClient();
