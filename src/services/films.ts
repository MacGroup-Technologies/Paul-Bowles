import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

export function fetchFilms() {
  return axios.get(`${baseURL}/v1/archive/photos/?tag=film`);
}

export function fetchTwoClips() {
  return axios.get(`${baseURL}/v1/archive/videos/?alttag=Two Clips`);
}