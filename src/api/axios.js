import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("user_token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    config.headers["Accsess-Control-Allow-Origin"] = "*";

    return config;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  function (config) {
    return config;
  },
  async function (error) {
    console.log(error);
    return error;
  }
);

export default axios;
