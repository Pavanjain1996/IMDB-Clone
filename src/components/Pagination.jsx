import React, { useState } from 'react'

function Pagination() {
  let [pageNum, setPageNum] = useState(1);
  const onPrev = () => {
    if(pageNum > 1){
      setPageNum(pageNum-1);
    }
  }
  const onNext = () => {
    if(pageNum > 0){
      setPageNum(pageNum+1);
    }
  }
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
