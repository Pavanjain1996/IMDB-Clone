import React from 'react'
import { Link } from 'react-router-dom'

function NotFound404() {
  return (
    <div className='m-8 h-[80vh] text-center text-red-500'>
      <div className='text-[96px] leading-none'>ERROR</div>
      <div className='space-x-14 text-[96px] leading-none'><span>4</span><span>0</span><span>4</span></div>
      <div className='text-[60px] m-8 leading-3'>Not Found</div>
      <div className='text-[30px] m-8'>We have not published anything here.<br/>Please checkout out home page.</div>
      <div><Link to="/" className="p-2 bg-red-500 rounded-xl text-white text-xl">Go to Home</Link></div>
    </div>
  )
}

export default NotFound404
