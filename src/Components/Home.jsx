import React from 'react'
import monkey2 from '../assets/monkey2.jpg'
import TextChange from '../TextChange'

const Home = () => {
  return (
    <div className='text-white flex w-full justify-between items-start p-10 md:p-20'>
      <div className='md:w-2/4 md:pt-10'>
      <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'>
        <TextChange/>
      </h1>
      <br></br>
      <p className='text-sm md:text-2xl tracking-tight'>
        Welcome to my Portfolio Website...Hope you enjoy going through it :)
      </p>
      <button className='mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'><a href="#Footer">Contact Me!</a></button>
      </div>
      <div className='ml-72'>
        <img className="w-3/4 rounded-3xl" src={monkey2} alt="Tavishi's Portfolio Image" />
      </div>
    </div>
  )
}

export default Home
