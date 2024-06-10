import axios, { InternalAxiosRequestConfig } from "axios";

export const notificationsApi = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api/anomaly-service/`,
});

const requestInterceptor = (config: InternalAxiosRequestConfig) => {
  if (process.env.REACT_APP_ENV === "dev") {
    config.url = config.url + "?key=64d94490";
  }

  return config;
};

notificationsApi.interceptors.request.use(requestInterceptor);
