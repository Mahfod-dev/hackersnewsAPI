import { useState } from 'react';
import { SearchForm } from './components/Form'
import { StoriesList } from './components/StoriesList/StoriesList';
import { Button } from './components/UI';


function HackerNewsApp() {

  const [news,setNews] = useState('React')
  const [page,setPage] = useState(0)


  function onSubmitSearchNews(news: string) {
		setNews(news);
  }

  return (
    <div className='flex flex-col text-center h-screen'>
     
      <SearchForm onSubmitSearchNews={onSubmitSearchNews} />
      <StoriesList news={news} page={page}/>
      <Button setPage={setPage} page={page}/>


    </div>
  )
}

export default HackerNewsApp
