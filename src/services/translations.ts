import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

export function getTranslations() {
  return axios.get(`${baseURL}/v1/archive/translations/`);
}

export function getTranslationsByQuery(query: string) {
  return axios.get(`${baseURL}/v1/archive/translations/?query=${query}`)
}

export function getTranslationsById(query: any) {
  return axios.get(`${baseURL}/v1/archive/translations/${query}`)
}