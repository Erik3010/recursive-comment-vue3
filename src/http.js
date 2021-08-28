import axios from "axios";

const baseURL = "http://192.168.100.22:8000/api";
// const baseURL = "http://localhost:8000/api";

const instance = axios.create({
  baseURL,
});

export default instance;
