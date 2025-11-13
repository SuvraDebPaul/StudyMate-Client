import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://study-mate-server-suvradebpauls-projects.vercel.app/",
  // baseURL: "http://localhost:3000/",
});

export default axiosInstance;
