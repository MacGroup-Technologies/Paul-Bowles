import axios from "axios";

export function getUrl(url: string) {
  return axios.get(url)
}