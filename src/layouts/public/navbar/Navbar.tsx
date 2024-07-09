import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/logos/logo.png'
import avatar from '@/assets/images/avatar.jpg'
import { FaSearch } from "react-icons/fa";
import {navData} from '@/constants/NavbarConstants'
import './style.scss';


export function NavbarLayout() {
  return (
    <nav className='navbar'>
      <div className='navbar-pub'>
        <div className='nav-logo'>
          <Link href={'/'}>
            <Image 
              src={logo}
              alt='Logo'
              className='logo'
              height={70}
              width={70}
            />
          </Link>
          <div className='nav-title'>
            <h3>SportX</h3>
          </div>
        </div>
        <ul className='nav-menu'>
          {navData.map((item, index) => (
            <li key={index} className='nav-item'>
              <Link href={item.link}>{item.title}</Link>
              {item.children && (
                <ul className='sub-menu'>
                  {item.children.map((subItem, subIndex) => (
                    <li key={subIndex} className='sub-item'>
                      <Link href={subItem.link}>{subItem.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div className='nav-search'>
          <input type='text' placeholder='Search' />
          <FaSearch className='search-icon'/>
        </div>
        <div className='nav-avatar'>
          <Image 
            src={avatar}
            alt='User Avatar'
            className='avatar'
            height={50}
            width={50}
          />
        </div>
      </div>
    </nav>
  )
}
