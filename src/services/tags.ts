import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

export function fetchTag() {
  return axios.get(`${baseURL}/v1/archive/alttags`)
}