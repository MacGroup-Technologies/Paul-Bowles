import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

export function fetchMusic() {
  return axios.get(`${baseURL}/v1/archive/photos/?tag=Music&alttag=songs`);
}

export function fetchMusicPhotoAlt(altTag: any) {
  return axios.get(`${baseURL}/v1/archive/photos/?alttag=${altTag}`)
}

export function fetchMusicBookAlt(alt: any) {
  return axios.get(`${baseURL}/v1/archive/writings/?website_tag=${alt}`)
}

export function fetchMusicAlt(alt: any) {
  return axios.get(`${baseURL}/v1/archive/music/?alttag=${alt}`)
}

export function fetchOnPaulBowlesMusic() {
  return axios.get("https://paul-bowles-665265c4bc24.herokuapp.com/api/v1/archive/photos/?tag=opbm")
}