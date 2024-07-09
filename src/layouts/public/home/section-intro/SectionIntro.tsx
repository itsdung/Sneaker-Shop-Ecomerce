import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import intro1 from '@/assets/images/intro-img.jpg'
import airmax from '@/assets/images/airmax.jpg'
import './style.scss';

export default function SectionIntro() {
  return (
    <div className='intro'>
        <div className='intro-inner'>
            <h1 className='intro-title'>Air max 270</h1>
            <p className='intro-text'>
                Boasting the biggest heel air bag yet, bringing you
                <br />even closer to the feeling of walking on air.
            </p>
            <div className='intro-shop'>
                <Link className='intro-shop-text' href={'/'}>
                    <p>Shop Men's</p>
                </Link>
                <Link className='intro-shop-text' href={'/'}>
                    <p>Shop Women's</p>
                </Link>
            </div>
        </div>
        <div className='intro-img'>
            <Link href={'/'}>
                <Image 
                src={intro1}
                alt='intro'
                className='intro-img-pictures'
                />
            </Link>
            <Link href={'/'}>
                <Image 
                src={airmax}
                alt='intro'
                className='intro-img-pictures'
                />
            </Link>
        </div>
    </div>
  )
}
