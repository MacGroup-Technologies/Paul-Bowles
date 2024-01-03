import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

export function getLibraryStats(){
  return axios.get(`${baseURL}/v1/archive/library`).then(response=> {
    const total_items_with_images = response.data.libraries_with_images.count
    const items_in_each_response_count = Math.max(response.data.libraries_with_images.results.length, response.data.libraries_without_images.results.length)
    const last_page_for_images = Math.ceil(total_items_with_images/items_in_each_response_count);

    const output ={
      data : {
        last_page_for_images
      }
    }
    return output
  })
}

export function fetchLibrary(page:number = 1,last_page_for_images:number) {
  const _page = Number(page);
  page = Number(page) > last_page_for_images ? page - last_page_for_images : page;
  return axios.get(`${baseURL}/v1/archive/library?page=${page}`).then(response=>{
    const output ={
      data : {
        results: _page > last_page_for_images ? response.data.libraries_without_images.results: response.data.libraries_with_images.results,
        next: response.data.libraries_with_images.next || response.data.libraries_without_images.next,
        previous: response.data.libraries_with_images.previous || response.data.libraries_without_images.previous,
      }
    }
    return output
  })
}

