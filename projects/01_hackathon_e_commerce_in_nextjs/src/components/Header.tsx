import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import logo from '@/../../01_hackathon_e_commerce_in_nextjs/public/logo.png'
import search from '@/../../01_hackathon_e_commerce_in_nextjs/public/search.png'
import Cart from '@/../../01_hackathon_e_commerce_in_nextjs/public/Cart.png'
import {useState, useEffect} from 'react'


const searchImage = search
export default function Header() {
    const [searchImage, setSearchImage] = useState(false)
    useEffect = ()=>{
        setSearchImage(false)
    },[]
        
    
  return (
    <>
    <div className='flex py-5 flex-row '>
        <div className="ml-12">
            <Image 
            src={logo}
            alt="logo"
            width={100}
            height={100}
            />

        </div>
    
    <div className="">
        <div className="">
            <Image
            src={search}
            alt='search'
            className='ml-[900px]'
        />

        </div>

    </div>
    <div className="">
        <div className="flex gap-4 ml-10">
            <ul className='flex gap-5 ml-4'>
                <li>Login</li>
                <li>Help</li>
            </ul>
        </div>
    </div>
    <div className="">
        <div className="">
            <Image
            src={Cart}
            alt='cart'
            className='ml-10 '
            />
        </div>
    </div>
    </div>

    </>
  )
}
