import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

export function fetchLibrary(page:number = 1) {
  return axios.get(`${baseURL}/v1/archive/library?page=${page}`).then(response=>{
    const output ={
      data : {
        results: response.data.libraries.results,
        next: response.data.libraries.next,
        previous: response.data.libraries.previous,
      }
    }
    return output
  })
}

