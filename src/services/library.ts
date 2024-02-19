import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

export async function fetchLibrary(page:number = 1, query:string = "", has_images:boolean) {
  const url = new URL(`${baseURL}/v1/archive/library`)
  url.searchParams.set("page", String(page))
  url.searchParams.set("query", query)
  if (has_images !== undefined){
    url.searchParams.set("has_images", String(has_images))
  }

  return await axios.get(url.toString()).then(response=>{
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

