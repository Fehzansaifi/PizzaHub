import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <div className='h-12 md:h-12 p-4 lg:p-12 xl:p-12 text-red-500 flex items-center justify-between ring-offset-purple-600 ring-red-500'>
        <Link href="/" className='font-bold text-xl'>PIZZAHUB</Link>
        <p> &copy; ALL RIGHT RESERVED.</p>
      </div>
    </>
  )
}

export default Footer
