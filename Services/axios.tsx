import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://192.168.15.10:3000',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
