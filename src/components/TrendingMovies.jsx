import React from 'react'
import BannerImage from '../static/BannerImage.jpg'

function TrendingMovies() {
  return (
    <div>
      <div className='text-center font-bold text-2xl pb-6 text-red-500'>Trending Movies</div>
      <div className='flex flex-wrap justify-center'>
        <img src={BannerImage} alt="Movie" className='h-[40vh] rounded-xl w-[150px] m-4 hover:scale-110 object-cover'/>
        <img src={BannerImage} alt="Movie" className='h-[40vh] rounded-xl w-[150px] m-4 hover:scale-110 object-cover'/>
        <img src={BannerImage} alt="Movie" className='h-[40vh] rounded-xl w-[150px] m-4 hover:scale-110 object-cover'/>
        <img src={BannerImage} alt="Movie" className='h-[40vh] rounded-xl w-[150px] m-4 hover:scale-110 object-cover'/>
        <img src={BannerImage} alt="Movie" className='h-[40vh] rounded-xl w-[150px] m-4 hover:scale-110 object-cover'/>
        <img src={BannerImage} alt="Movie" className='h-[40vh] rounded-xl w-[150px] m-4 hover:scale-110 object-cover'/>
      </div>
    </div>
  )
}

export default TrendingMovies
