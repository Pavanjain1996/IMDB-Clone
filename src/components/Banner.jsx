import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Banner() {
  let [bannerMovie, setBannerMovie] = useState('')
  
  useEffect(() => {
    (function(){
      axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=13cf82512e78f27808142958d5d4f8f6').then((res) => {
        setBannerMovie(res.data.results[0]);
      })
    })()
  },[])
  return (
    <>{
        bannerMovie === "" ? <h1>Loading</h1> : 
        <div className={`bg-[url(https://image.tmdb.org/t/p/original/${bannerMovie.backdrop_path})] h-[50vh] md:h-[60vh] bg-center bg-cover flex items-end`}>
          <div className='text-xl md:text-2xl text-white text-center font-bold bg-gray-900 p-4 bg-opacity-50 w-[100%]'>{bannerMovie.title}</div>
        </div>
      }
    </>
  )
}

export default Banner
