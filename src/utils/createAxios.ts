import axios from "axios";

const port = process.env.NODE_ENV=='dev' ? process.env.PORT : 8080

const api = axios.create({
  baseURL: `http://localhost:${port}/api`,
});

export default api
