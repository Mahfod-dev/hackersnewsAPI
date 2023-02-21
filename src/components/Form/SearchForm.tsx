import { FormEvent } from "react"

import { useForm } from "../../hooks/useForm"

export const SearchForm = ({onSubmitSearchNews}:{onSubmitSearchNews:(v:string) => void}) => {

const {searchNews,onChange,displayErrorMessage,formIsValid,setTouched,errorMessage,handleBlur} =useForm()


const onSubmit=(e:FormEvent<HTMLFormElement>)=>{
    setTouched(true)
    e.preventDefault()
    if(!formIsValid) return

  

    onSubmitSearchNews(searchNews)
    
}


  return (
		<form className=' bg-red-800 h-30 p-4 flex justify-center place-items-center' onSubmit={onSubmit}>
			<div>
				<div className='flex flex-col'>
					<label htmlFor='searchNews'>Search News</label>
					<input
						type='text'
						id='searchNews'
						value={searchNews}
						onChange={onChange}
						onBlur={handleBlur}
						aria-describedby={
							displayErrorMessage ? 'error-message' : undefined
						}
						pattern='[a-z]{3,10}'
						required
					/>
					{displayErrorMessage && (
						<div role='alert' id='error-message'>
							{errorMessage}
						</div>
					)}
				</div>

				<button
					className='border-l-amber-400 bg-slate-700 px-3 rounded active:translate-y-0.5'
					type='submit'
					disabled={!formIsValid}
				>
					Search
				</button>
			</div>
		</form>
  );
}