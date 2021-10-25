import axios from "axios";
export const API_URL = "https://nostresso-back.herokuapp.com";
const $api = axios.create({
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyMDQ4NTU4ODAiLCJpYXQiOjE2MzUwOTM3MzQsImV4cCI6MTY0MzczMzczNH0._nUSWKfG3vVsjW-iao4qy7Dsl2P_5XZ78GYsx3s6tyg`;
  return config;
});

export default $api;
