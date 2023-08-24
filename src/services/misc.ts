import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

export function getUrl(url: string) {
  return axios.get(url)
}

export function getPhotoAltTag(altTag: string) {
  return axios.get(`${baseURL}/v1/archive/photos/?alttag=${altTag}`)
}

export function getMusicTag(altTag: string) {
  return axios.get(`${baseURL}/v1/archive/music/?tag=${altTag}`)
}

export function getBookTag(altTag: string) {
  return axios.get(`${baseURL}/v1/archive/books/?tag=${altTag}`)
}