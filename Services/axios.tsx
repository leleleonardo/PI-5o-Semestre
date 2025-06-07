import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://{SEU_IP}:5000',
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
