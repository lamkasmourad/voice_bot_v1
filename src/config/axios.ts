import axios, { AxiosInstance } from "axios";
const HTTP: AxiosInstance = axios.create({
  baseURL: "http://localhost:9005/api",
  headers: {
    "Content-type": "application/json",
  },
});
export default HTTP;