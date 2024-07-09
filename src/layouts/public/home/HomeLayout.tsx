import React from 'react'
import SectionBanner from './section-banner/SectionBanner'
import SectionIntro from './section-intro/SectionIntro'
import SectionKit from './section-kit/SectionKit'
import Sectionyoung from './section-young/SectionYoung'
import Sectionexplore from './section-explore/SectionExplore'
import { BannerCarousel } from './banner-carousel/BannerCarousel'


export default function HomeLayout() {
  return (
    <div>
        {/* <BannerCarousel/> */}
        <SectionBanner />
        <SectionIntro />
        <SectionKit />
        <Sectionyoung />
        <Sectionexplore/>
    </div>
  )
}
