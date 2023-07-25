import axios from "axios";
import type { auth, register } from "@/interfaces/user";

const baseURL = import.meta.env.VITE_BASE_URL;

export function loginService(payload: auth) {
  return axios.post(`${baseURL}/v1/account/login/`, {
    ...payload
  })
}

export function registerService(payload: register) {
  return axios.post(`${baseURL}/v1/account/register/`, {
    ...payload
  })
}