import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api-5sem-r2ds.onrender.com',
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
