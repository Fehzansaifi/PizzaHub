"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CartIcon from './CartIcon'

const links = [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "Menu", url: "/menu" },
    { id: 3, title: "Working Hours", url: "/contact" },
    { id: 4, title: "Contact", url: "/contact" },
]

const Menu = () => {
    const [open, setOpen] = useState(false)

    const user = false
    return (
        <div>
            {!open ? (
                <Image src="/open.png"
                    alt=''
                    width={20}
                    height={20}
                    onClick={() => setOpen(true)}
                />
            ) : (
                <Image src="/close.png"
                    alt=''
                    width={20}
                    height={20}
                    onClick={() => setOpen(false)}
                />
            )}
            {open && <div className="bg-red-500 text-white w-full absolute left-0 top-24 h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl">
                {links.map(item => (
                    <Link href={item.url} key={item.id} onClick={()=> setOpen(false)}>{item.title}</Link>
                ))}
                {!user ? <Link href="/login" onClick={()=> setOpen(false)}>Login</Link> :
                    <Link href="/Orders" onClick={()=> setOpen(false)}>Orders</Link>}
                <Link href="/cart" onClick={() => setOpen(false)}>
                    <CartIcon />
                </Link>
            </div>}
        </div>
    )
}


export default Menu