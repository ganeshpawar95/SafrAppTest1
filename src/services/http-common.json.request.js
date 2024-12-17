import axios from "axios";
import { API_KEY, BASE_URL } from "../utils/constant";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    console.log("errr1", error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    console.log("ress", response.data);
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    console.log("error", error.response);

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
    }
    if (error.response.status === 400 || 500 || 401) {
      var errorMessage = error.response.data.message || "An error occurred.";

      return Promise.reject(errorMessage);
    }
    return Promise.reject(error);
  }
);

export default instance;
