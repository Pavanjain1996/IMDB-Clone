import React from 'react'

function Pagination() {
  return (
    <div className='flex justify-center m-6'>
      <div className='border-2 border-r-0 p-1 border-red-500 rounded-l-xl'>Previous</div>
      <div className='border-2 p-1 border-red-500'>1</div>
      <div className='border-2 border-l-0  p-1 border-red-500 rounded-r-xl'>Next</div>
    </div>
  )
}

export default Pagination
