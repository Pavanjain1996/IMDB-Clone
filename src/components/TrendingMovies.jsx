import React from 'react'

function TrendingMovies() {
  return (
    <div>
      <div className='text-center font-bold text-2xl p-6 text-red-500'>Trending Movies</div>
      <div className='flex flex-wrap justify-center'>
        <div className='bg-[url(https://www.online-tech-tips.com/wp-content/uploads/2021/07/13-save-image-paint.jpg)]
        bg-center bg-cover w-[160px] h-[30vh] md:w-[180px] md:h-[40vh] m-4 rounded-xl hover:scale-110 flex items-end'>
          <div className='text-white text-center font-bold bg-gray-900 p-1 bg-opacity-90 w-[100%] rounded-b-xl'>Hello</div>
        </div>
      </div>
    </div>
  )
}

export default TrendingMovies
