"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

type Props = {
    price: number;
    id: number;
    options?: { title: string; additionalPrice: number }[]
}

const Price = ({ price, options }: Props) => {

    const [total, setTotal] = useState(price)
    const [quantity, setQuantity] = useState(1)
    const [selected, setSelected] = useState(0)

    useEffect(() => {
        setTotal(quantity * (options ? price + options[selected].additionalPrice : price));
    }, [quantity, selected, options, price])


    return (
        <div className='flex flex-col gap-4'>
            <h2 className="text-2xl font-bold">${total.toFixed(2)}</h2>
            {/* Options container */}
            <div className="flex gap-4">
                {options?.map((option, index) => (
                    <button className="min-w-[6rem] p-2 ring-1 ring-red-400 rounded-lg"
                        key={option.title} style={{
                            background: selected === index ? "rgb(248 113 113)" : "white",
                            color: selected === index ? "white" : "red",
                        }}
                        onClick={() => setSelected(index)} >
                        {option.title}</button>
                ))}
            </div>
            {/* Quantity and Add Button container */}
            <div className="flex justify-between items-center">
                {/* Quantity section */}
                <div className="flex justify-between w-full p-3 ring-1 ring-red-500">
                    <span className="">Quantity</span>
                    <div className="flex gap-4 items-center">
                        <button onClick={() => setQuantity(prev => (prev > 1 ? prev - 1 : 1))} className="">{'<'}</button>
                        <span className="">{quantity}</span>
                        <button onClick={() => setQuantity(prev => (prev < 9 ? prev + 1 : 9))} className="">{'>'}</button>
                    </div>
                </div>
                {/* Cart button */}
                <button className="uppercase bg-red-500 text-white p-3 w-56 rounded-lg font-semibold hover:font-bold ring-1 ring-red-500"><Link href="/cart">Add to Cart</Link></button>
            </div>
        </div>
    )
}

export default Price
