import axios from "axios";
import type { tab } from "@/interfaces/user";

const baseURL = import.meta.env.VITE_BASE_URL + "/v1";

export function getData(path: tab, page: number) {
  return axios.get(`${baseURL}/archive/${path}/?page=${page}`);
}