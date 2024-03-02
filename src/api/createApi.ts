import axios from "axios";

const createApi = () => {
  const api = axios.create({
    baseURL: "http://localhost:8080",
  });

  return api;
};

const API = createApi();
export default API;
