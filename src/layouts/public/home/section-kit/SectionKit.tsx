import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import kit1 from '@/assets/images/kit.jpg'
import './style.scss';

export default function SectionKit() {
  return (
    <div className='kit'>
        <div className='kit-inner'>
            <h1 className='kit-title'>Air vapor max flyknit 2</h1>
            <p className='kit-text'>
                Our ground-breaking running innovation seven years
                <br />in the making undergoes new evolution.
            </p>
            <div className='kit-shop'>
                <Link className='kit-shop-text' href={'/'}>
                    <p>Shop Men's</p>
                </Link>
                <Link className='kit-shop-text' href={'/'}>
                    <p>Shop Women's</p>
                </Link>
            </div>
        </div>
        <div className='kit-img'>
            <Link href={'/'}>
                <Image 
                src={kit1}
                alt='kit'
                className='kit-img-pictures'
                />
            </Link>
        </div>
    </div>
  )
}
