import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import explore1 from '@/assets/images/explore.jpg';
import './style.scss';
import { exploreProductData } from '@/constants/ExploreProductConstants';

export default function Sectionexplore() {
  return (
    <div className='explore'>
        <div className='explore-inner'>
            <h1 className='explore-title'>Explore all air max</h1>
            <p className='explore-text'>
                Retro, new or personally customised, get the Air Max that’s right for you.
            </p>
            <div className='explore-shop'>
                <Link className='explore-shop-text' href={'/'}>
                    <p>Shop All Air Max</p>
                </Link>
                <Link className='explore-shop-text' href={'/'}>
                    <p>Shop All Boys</p>
                </Link>
            </div>
        </div>
        <div className='explore-img'>
            {exploreProductData.map((product, index) => (
                    <div key={index} className='product-item-list'>
                        <Link className='product-item' href={product.link}>
                            <Image className='product-item-img' src={product.img} alt={product.name}  />
                            <div className='product-item-name'>
                                <p>{product.name}</p>
                            </div>
                        </Link>
                    </div>
                ))}
        </div>
    </div>
  )
}