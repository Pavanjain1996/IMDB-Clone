import React from 'react'
import NavIcon from '../static/NavIcon.png'

function NavBar() {
  return (
    <div className='flex items-center space-x-8 pl-4 py-4 bg-gray-300'>
      <img src={NavIcon} alt="Logo" className='w-[50px]'/>
      <h3 className='font-bold text-xl text-red-500'>Movies</h3>
      <h3 className='font-bold text-xl text-red-500'>Favourites</h3>
    </div>
  )
}

export default NavBar
