import axios from "axios";
export const API_URL = "https://nostresso-back.herokuapp.com";
const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyMDQ4NTU4ODAiLCJpYXQiOjE2MzUwNjMwNzksImV4cCI6MTY0MzcwMzA3OX0.vA7WaN2Ep2fmGOVbZPt7Rw7gwt0msKyylKkh7dLOxB0`;
  return config;
});

export default $api;
