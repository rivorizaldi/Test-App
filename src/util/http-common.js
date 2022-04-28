import axios from "axios";
import { unauthorize } from "../features/Auth/redux/AuthSlice";
import { store } from "../store/store";

const httpClient = axios.create({
  baseURL: "http://119.8.167.126:90/api",
});

httpClient.interceptors.request.use(
  (config) => {
    const token = store.getState().auth.token;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

httpClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { status } = error.response;
    if (status === 401) {
      const { dispatch } = store;
      // await dispatch(resetState());
      dispatch(unauthorize());
    }
    return Promise.reject(error);
  }
);

export default httpClient;
