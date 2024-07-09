import { Carousel } from '@/components/carousels/Carousel'
import deliLogo from '@/assets/icons/FreeShipping.png'
import returnLogo from '@/assets/icons/30DayFreeReturns.png'
import emailLogo from '@/assets/icons/EmailSignup.png'
import Image from 'next/image'
import React from 'react'
import "./style.scss";

export function BannerCarousel() {
  return (
    <div className='banner-carousel'>
      <Carousel>
        <div>
          <h1>Free International Delivery to you</h1>
          <Image src={deliLogo} width={30} height={30} alt='icon' />
        </div>
      </Carousel>
    </div>
  )
}
