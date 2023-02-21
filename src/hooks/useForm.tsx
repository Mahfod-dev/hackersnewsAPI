import {ChangeEvent, useState} from 'react'


export const useForm = ()=>{


    const [searchNews,setSearchNews] = useState('')
    const [touched,setTouched] = useState(false)



const searchNewsLowercase = searchNews === searchNews.toLowerCase()
const searchNewsIsLongEnough = searchNews.length >= 3

const formIsValid = searchNewsLowercase && searchNewsIsLongEnough

const displayErrorMessage = touched && !formIsValid

let errorMessage = null

if(!searchNewsLowercase){
errorMessage = 'Movie must be to lowercase'
}else if(!searchNewsIsLongEnough){
 errorMessage = 'Movie must be a leaset 3 characters long'   
}


const onChange =(e:ChangeEvent<HTMLInputElement>)=>{

setSearchNews(e.currentTarget.value)

}

const onReset = ()=>{
    setSearchNews('')
}

const handleBlur = ()=>{
    setTouched(true)
}


return {searchNews,onChange,onReset,displayErrorMessage,formIsValid,setTouched,errorMessage,handleBlur}

}
