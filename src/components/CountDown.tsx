"use client"
import React from 'react'
import Countdown from 'react-countdown'

const endingDate = new Date("2024-12-31")

const CountDown = () => {
  return (
    <div className='font-bold text-3xl text-yellow-300'>
      <Countdown date={endingDate}/>
    </div>
  )
}

export default CountDown
