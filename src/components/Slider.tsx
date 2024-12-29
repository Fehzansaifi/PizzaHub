"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link';

const data = [
    {
        id: 1,
        title: "Always fresh & always crispy & always hot",
        image: "/slide1.png",
    },
    {
        id: 2,
        title: "We deliver your order wherever you are in now",
        image: "/slide2.png",
    },
    {
        id: 3,
        title: "The best pizza to share with your family",
        image: "/slide3.jpg",
    }
];

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const interval = setInterval(
            () =>
                setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)), 2000);
        return () => clearInterval(interval);
    }, [])


    return (
        <div className='flex flex-col gap-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50'>
            {/* Text container */}
            <div className="flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold ">
                <h1 className="text-4xl text-center uppercase p-4 md:text-6xl lg:text-7xl">
                    {data[currentSlide].title}
                </h1>
                <button className='bg-red-500 text-white py-2 px-6 rounded-lg md:py-4 md:px-8'><Link href="/menu">Order Now</Link></button>
            </div>

            {/* Image container */}
            <div className="flex-1 w-full relative ">
                <Image src={data[currentSlide].image} alt='' fill className='object-cover' />
            </div>
        </div>
    )
}

export default Slider
