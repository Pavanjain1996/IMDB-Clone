import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Audio } from 'react-loader-spinner';
import Pagination from './Pagination';

function TrendingMovies() {
  let [pageNum, setPageNum] = useState(1);
  const onPrev = () => {
    if(pageNum > 1){
      setPageNum(pageNum-1);
    }
  }
  const onNext = () => {
    if(pageNum > 0 && pageNum < 1000){
      setPageNum(pageNum+1);
    }
  }
  let [trendingMovies, setTrendingMovies] = useState([]);
  useEffect(() => {
    (function(){
      axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=13cf82512e78f27808142958d5d4f8f6&page=${pageNum}`).then((res) => {
        setTrendingMovies(res.data.results);
      })
    })()
  }, [pageNum])
  
  return (
    <div>
      <div className='text-center font-bold text-2xl p-6 text-red-500'>Trending Movies</div>
      <div className='flex flex-wrap justify-center'>
      {trendingMovies === [] ? <div className='flex justify-center'>
          <Audio height="80" width="80" radius="9" color="gray" secondaryColor="gray" ariaLabel="loading"/>
        </div> : 
        trendingMovies.map((movie) => {
          return <div key={movie.id} className='bg-center bg-cover w-[160px] h-[30vh] md:w-[180px] md:h-[40vh] m-4 rounded-xl hover:scale-110 flex items-end'
                  style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`}}>
                  <div className='text-white text-center font-bold bg-gray-900 p-1 bg-opacity-90 w-[100%] rounded-b-xl'>{movie.title !== undefined ? movie.title : movie.name}</div>
        </div>
        })
      }
      </div>
      <Pagination 
        pageNum={pageNum}
        onPrev={onPrev}
        onNext={onNext}
      ></Pagination>
    </div>
  )
}

export default TrendingMovies
