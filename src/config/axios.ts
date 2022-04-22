import axios, { AxiosInstance } from "axios";
const HTTP: AxiosInstance = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json",
  },
});
export default HTTP;