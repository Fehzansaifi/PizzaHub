import React from 'react'
import Link from 'next/link'
import Menu from './Menu'
import CartIcon from './CartIcon'
import Image from 'next/image'

const Navbar = () => {
  const user = false
  return (
    <div className='h-12 text-red-500 p-4 flex justify-between items-center border-b-red-500 border-b-2 uppercase md:h-14 lg:px-20 xl:px-40'>
      {/* left Links */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">Contact</Link>
      </div>
      {/* Logo */}
      <div className='text-xl md:font-semibold flex-1 md:text-center'>
        <Link href="/">PizzaHub</Link>
      </div>
      {/* Mobile Menu */}
      <div className='md:hidden '>
        <Menu />
      </div>
      {/* Right Links */}
      <div className='hidden md:flex gap-4 items-center justify-end flex-1'>
        <div className='md:absolute top-3 right-2 lg:static flex p-1 gap-1 items-center justify-center cursor-pointer bg-orange-300 rounded-lg'>
          <Image src="/phone.png" alt="" width={20} height={20}/>
          <span className=''>+91 88888 00011</span>
        </div>
        {!user ? <Link href="/login" className='cursor-pointer'>Login</Link>:
        <Link href="/orders" className='cursor-pointer'>Orders</Link>}
        <CartIcon/>
      </div>
    </div>
  )
}

export default Navbar
