import axios from "axios";

export const http = axios.create({
  baseURL: "https://officedocbackend.herokuapp.com/api",
});
