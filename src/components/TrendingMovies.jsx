import React, { useEffect, useState } from 'react'
import axios from 'axios'

function TrendingMovies() {
  let [trendingMovies, setTrendingMovies] = useState([]);
  useEffect(() => {
    (function(){
      axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=13cf82512e78f27808142958d5d4f8f6').then((res) => {
        setTrendingMovies(res.data.results);
      })
    })()
  }, [])
  
  return (
    <div>
      <div className='text-center font-bold text-2xl p-6 text-red-500'>Trending Movies</div>
      <div className='flex flex-wrap justify-center'>
      {
        trendingMovies.map((movie) => {
          return <div className={`bg-[url(https://image.tmdb.org/t/p/original/${movie.poster_path})] bg-center bg-cover w-[160px] h-[30vh] md:w-[180px] md:h-[40vh] m-4 rounded-xl hover:scale-110 flex items-end`}>
                  <div className='text-white text-center font-bold bg-gray-900 p-1 bg-opacity-90 w-[100%] rounded-b-xl'>{movie.title}</div>
        </div>
        })
      }
      </div>
    </div>
  )
}

export default TrendingMovies
