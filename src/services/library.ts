import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

export async function fetchLibrary(page:number = 1, query:string = "") {
  return await axios.get(`${baseURL}/v1/archive/library?page=${page}&query=${query}`).then(response=>{
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

