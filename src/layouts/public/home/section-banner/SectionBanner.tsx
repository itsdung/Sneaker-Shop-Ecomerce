import React from 'react'
import Image from 'next/image'
import banner from '@/assets/images/banner.jpg'
import './style.scss'
export default function SectionBanner() {
  return (
    <div className='banner-pub'>
        <Image className='banner-img' src={banner} alt='banner' /> 
    </div>
  )
}
