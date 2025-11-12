import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://study-mate-server-suvradebpauls-projects.vercel.app/",
});

export default axiosInstance;
