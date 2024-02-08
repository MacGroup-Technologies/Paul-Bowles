import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

export function getTranslations(page=1, query="", language="") {
  const url = new URL(`${baseURL}/v1/archive/translations/`)
  if (query){
    url.searchParams.set("query", query)
  }
  if (page){
    url.searchParams.set("page", String(page))
  }
  if (language){
    url.searchParams.set("language", language)
  }
  return axios.get(url.toString());
}

export function getTranslationsByQuery(query: string) {
  return axios.get(`${baseURL}/v1/archive/translations/?query=${query}`)
}

export function getTranslationsById(query: any) {
  return axios.get(`${baseURL}/v1/archive/translations/${query}`)
}
