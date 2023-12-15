import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

export function fetchFilms(tag = "film") {
  return axios.get(`${baseURL}/v1/archive/photos/?tag=${tag}`);
}

export function fetchTwoClips() {
  return axios.get(`${baseURL}/v1/archive/images/?image_category=Two Films`);
}