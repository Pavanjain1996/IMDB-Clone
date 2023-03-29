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

  let [hovered, setHovered] = useState("");
  const showEmoji = (id) => {
    setHovered(id);
  }
  const hideEmoji = () => {
    setHovered("");
  }
  let favMovieIds = [];
  if (localStorage.getItem("favMovieIds") === null) {
    favMovieIds = [];
  }
  else {
    favMovieIds = JSON.parse(localStorage.getItem("favMovieIds"))
  }
  let favMovies = []
  if (localStorage.getItem("favMovies") === null) {
    favMovies = [];
  }
  else {
    favMovies = JSON.parse(localStorage.getItem("favMovies"))
  }

  let [favs, setFavs] = useState(favMovieIds);
  useEffect(() => {
    localStorage.setItem('favMovieIds', JSON.stringify(favs));
  }, [favs])

  let [favoriteMovies, setFavouriteMovies] = useState(favMovies);
  useEffect(() => {
    localStorage.setItem('favMovies', JSON.stringify(favoriteMovies));
  }, [favoriteMovies])

  const addMovieToFavs = (movie) => {
    let movies = [...favs, movie.id];
    setFavs(movies);
    movies = [...favoriteMovies, movie];
    setFavouriteMovies(movies);
  }
  const removeMovieFromFavs = (id) => {
    let newset = favs.filter((movie_id) => {return movie_id!==id});
    setFavs(newset);
    newset = favoriteMovies.filter((movie) => {return movie.id!==id});
    setFavouriteMovies(newset);
  }

  return (
    <div>
      <div className='text-center font-bold text-2xl p-6 text-red-500'>Trending Movies</div>
      <div className='flex flex-wrap justify-center'>
      {trendingMovies === [] ? <div className='flex justify-center'>
          <Audio height="80" width="80" radius="9" color="gray" secondaryColor="gray" ariaLabel="loading"/>
        </div> : 
        trendingMovies.map((movie) => {
          return <div key={movie.id} 
                  onMouseOver={()=>{
                    showEmoji(movie.id)
                  }}
                  onMouseOut={()=>{
                    hideEmoji()
                  }}
                  className='bg-center bg-cover w-[160px] h-[30vh] md:w-[180px] md:h-[40vh] m-4 rounded-xl hover:scale-110 flex items-end relative'
                  style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`}}>
                  <div className='p-1 bg-gray-900 rounded-xl absolute right-2 top-2'
                      style={{display:hovered===movie.id?'block':'none'}}>
                    {favs.includes(movie.id) === true ? <div className='text-2xl' onClick={()=>{removeMovieFromFavs(movie.id)}}>❌</div> : <div className='text-2xl' onClick={()=>{addMovieToFavs(movie)}}>😍</div>}
                  </div>
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
