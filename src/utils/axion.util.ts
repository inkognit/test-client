import axios from "axios";

const baseURL = process.env.REACT_APP_BACKEND_URL || "http://127.0.0.1:3001";

const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

// Добавляем перехват ответов
axiosInstance.interceptors.response.use(
  function (response) {
    alert(response.status);
    return response;
  },
  function (error) {
    alert(error.message);
    return Promise.reject(error);
  },
);

export { axiosInstance };


