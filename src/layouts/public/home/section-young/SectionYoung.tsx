import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import young1 from '@/assets/images/young.jpg';
import './style.scss';

export default function Sectionyoung() {
  return (
    <div className='young'>
        <div className='young-inner'>
            <h1 className='young-title'>Air max for young athletes</h1>
            <p className='young-text'>
                The Air Max styles kids love—from the ’87 original, Air Max 1, to the new larger-than-life Air Max 270.
            </p>
            <div className='young-shop'>
                <Link className='young-shop-text' href={'/'}>
                    <p>Shop All Girls</p>
                </Link>
                <Link className='young-shop-text' href={'/'}>
                    <p>Shop All Boys</p>
                </Link>
            </div>
        </div>
        <div className='young-img'>
            <Link href={'/'}>
                <Image 
                src={young1}
                alt='young'
                className='young-img-pictures'
                />
            </Link>
        </div>
    </div>
  )
}