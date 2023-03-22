import React from 'react'
import BannerImage from '../static/BannerImage.jpg'
import '../css/Banner.css'

function Banner() {
  return (
    <>
        <img src={BannerImage} alt="Banner"/>
        <div className='banner-head'>
            <div className='bg-gray-900 font-bold text-white text-2xl text-center bg-opacity-40 h-12 pt-2'>M3GAN</div>
        </div>
    </>
  )
}

export default Banner
