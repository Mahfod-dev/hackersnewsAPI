import { HackerAPI } from './../interface/hackerAPI.d';



export const fetchNewsAPI = async (query: string,page:number):Promise<HackerAPI> => {

  

    const response = await fetch(`https://hn.algolia.com/api/v1/search?query=${query}&page=${page}`);


    const data:HackerAPI = await response.json();

    if(response.ok){
    return data
  }else{
  return Promise.reject(new Error(`No movie with the name "${query}"`))
  }

   
}