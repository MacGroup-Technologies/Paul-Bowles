import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

export function getUrl(url: string) {
  return axios.get(url)
}

export function getPhotoAltTag(altTag: string, page:number=1) {
  return axios.get(`${baseURL}/v1/archive/images/?image_category=${altTag}&page=${page}`)
}

// export function getMusicTag(altTag: string) {
//   return axios.get(`${baseURL}/v1/archive/music/?tag=${altTag}`)
// }

export function getMorrocanMusic() {
  return axios.get(`${baseURL}/v1/archive/music/?music_category=Recording of Moroccan Music`)
}
