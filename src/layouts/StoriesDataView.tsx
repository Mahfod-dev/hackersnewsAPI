import { HackerAPI } from "../interface/hackerAPI"
import { v4 as uuidv4 } from 'uuid';



type NewsListProps={

newsList: HackerAPI

}


export const StoriesDataView = ({newsList}:NewsListProps) => {




  return (
		<>
			<ul className='flex flex-wrap-reverse justify-around'>
				{newsList.hits.map((news) => (
					<li key={uuidv4()} className='border w-[20rem] text-gray-300'>
						<h1>{news.title}</h1>
						<p>{news.author}</p>
						<p>{news.created_at}</p>
						<p>{news.points}</p>
						<p>{news.num_comments}</p>
            <a href={news.url} target="blank">{news.url}</a>
					</li>
				))}
			</ul>
		</>
  );
}