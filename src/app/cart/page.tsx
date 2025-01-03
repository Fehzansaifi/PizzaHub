import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const cartPage = () => {
  return (
    <div className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row'>
      {/* Product container */}
      <div className="h-1/2 p-4 flex flex-col justify-center overflow-y-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
        {/* Single item */}
        <div className="flex items-center justify-between mb-4">
          <Image src="/temporary/p1.png" alt='' width={100} height={100}/>
          <div className="">
            <h1 className="uppercase text-xl font-bold">slice</h1>
            <span className="">Large</span>
          </div>
          <h2 className="font-bold">895</h2>
          <span className="cursor-pointer">x</span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <Image src="/temporary/p1.png" alt='' width={100} height={100}/>
          <div className="">
            <h1 className="uppercase text-xl font-bold">slice</h1>
            <span className="">Large</span>
          </div>
          <h2 className="font-bold">895</h2>
          <span className="cursor-pointer">x</span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <Image src="/temporary/p1.png" alt='' width={100} height={100}/>
          <div className="">
            <h1 className="uppercase text-xl font-bold">slice</h1>
            <span className="">Large</span>
          </div>
          <h2 className="font-bold">895</h2>
          <span className="cursor-pointer">x</span>
        </div>
        
        


      </div>
      {/* Payment container */}
      <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
        <div className="flex justify-between">
          <span className="">Subtotal (3 items)</span>
          <span className="">$81.10</span>
        </div>
        <div className="flex justify-between">
          <span className="">Service Cost</span>
          <span className="">$0.00</span>
        </div>
        <div className="flex justify-between">
          <span className="">Delivery Cost</span>
          <span className="text-green-500">FREE</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="">Total(Incl. all tax)</span>
          <span className="font-bold">$81.10</span>
        </div>
        <hr className="" />
        <button className="bg-red-500 text-white p-3 w-1/2 font-semibold hover:font-bold rounded-lg self-end md:w-32"><Link href="/orders">Checkout</Link></button>
      </div>
    </div>
  )
}

export default cartPage
