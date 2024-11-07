import axios, { AxiosError } from 'axios';

const http = axios.create({
  baseURL: 'https://api',
  headers: {
    'Content-Type': 'application/json',
  }
});

http.interceptors.response.use(
  (res) => res,
  (error: unknown) => {
    return Promise.reject(error);
  },
);

export { http };
