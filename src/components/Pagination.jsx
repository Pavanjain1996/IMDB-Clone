import React from 'react'

function Pagination(props) {
  let {pageNum, onPrev, onNext} = props;
  return (
    <div className='flex justify-center m-6'>
      <button className='border-2 border-r-0 p-1 border-red-500 rounded-l-xl'
      onClick={onPrev}>Previous</button>
      <div className='border-2 p-1 border-red-500'>{pageNum}</div>
      <button className='border-2 border-l-0  p-1 border-red-500 rounded-r-xl'
      onClick={onNext}>Next</button>
    </div>
  )
}

export default Pagination
