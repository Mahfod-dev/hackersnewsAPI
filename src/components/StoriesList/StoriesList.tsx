import {useEffect} from 'react'
import {useQuery,useQueryClient } from "@tanstack/react-query"
import { fetchNewsAPI } from "../../api/fetchNewsAPI"
import { StoriesDataView } from "../../layouts"
import { HackerAPI } from "../../interface/hackerAPI"




export const StoriesList = ({news,page}:{news:string,page:number}) => {


  const queryClient = useQueryClient()

const result = async ()=>{

 

  await queryClient.prefetchQuery<HackerAPI>({
    queryKey: ['news',news,page],
    queryFn:()=> fetchNewsAPI(news,page)

    
  })

}

useEffect(()=>{
  result()
},[page])



const {data,error,isLoading,isError} = useQuery<HackerAPI>({
    queryKey:['news',news,page],
    queryFn:()=> fetchNewsAPI(news,page),
    staleTime: 2000,
    keepPreviousData:true,
  })

  if(isLoading)  return <h1>...Loading</h1>

  if(error instanceof Error) return <div>{error.message}</div>

  if(isError){
    return <div>Something went wrong</div>
  }


  return (
   <StoriesDataView newsList={data}/>
  )
}