import React from 'react'
import NavIcon from '../static/NavIcon.png'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='flex items-center space-x-8 pl-4 py-4 bg-gray-300'>
      <img src={NavIcon} alt="Logo" className='w-[50px]'/>
      <Link to="/" className='font-bold text-xl text-red-500'>Movies</Link>
      <Link to="/favourite" className='font-bold text-xl text-red-500'>Favourites</Link>
    </div>
  )
}

export default NavBar
