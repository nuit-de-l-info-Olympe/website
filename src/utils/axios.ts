import axios from 'axios';
// config
import { PUBLIC_API_HOST } from '../config-global';

// ----------------------------------------------------------------------

const axiosInstance = axios.create({ baseURL: PUBLIC_API_HOST });

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;
