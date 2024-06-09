import axios from "axios";

export const notificationsApi = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api/anomaly-service/`,
});
