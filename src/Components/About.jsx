import React from 'react'
import emoji from '../assets/emoji.png'
import {IoArrowForward} from 'react-icons/io5'

const About = () => {
  return (
    <div id='About'className='text-white md:flex overflow-hidden items-centermd:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
        <div>
            <h2 className='text-2xl md:text-4xl font-bold'>About Me...</h2>
            <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
                <img className='md:h-80'src={emoji} alt=""></img>

                <ul>
                    <div className='flex gap-3 py-4 px-6'>
                    <IoArrowForward size={30} className='mt-1'/>
                    <span className='w-96'>
                        <h1 className='text-xl md:text-2xl font-semibold leading-normal'>3rd Year CSE student at IIT Jodhpur</h1>
                        <p>
                            I am a confident and open-minded person, who is eager to learn new things...I am a passionate web development enthusiast and I see myself as a successful web developer in the future.
                        </p>
                    </span>
                    </div>

                    <div className='flex gap-3 py-4 px-6'>
                    <IoArrowForward size={30} className='mt-1'/>
                    <span className='w-96'>
                        <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Passionate coder</h1>
                        <p>
                            I love solving problems through coding and am proficient in languages like C++ and Python for DSA.I also have experience working with databases such as MongoDB, MongoDB Atlas and MySQL.
                        </p>
                    </span>
                    </div>

                    <div className='flex gap-3 py-4 px-6'>
                    <IoArrowForward size={30} className='mt-1'/>
                    <span className='w-96'>
                        <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Passionate Web Developer</h1>
                        <p>
                           I have worked with Python and JavaScript frameworks such as Django and React respectively.I also have experience working with databases such as MongoDB, MongoDB Atlas and MySQL. I have hosted some of my websites on Render.
                        </p>
                    </span>
                    </div>

                    <div className='flex gap-3 py-4 px-6'>
                    <IoArrowForward size={30} className='mt-1'/>
                    <span className='w-96'>
                        <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Singer by hobby</h1>
                        <p>
                            I love singing since an early age and am a part of the Music Society (Sangam) at IIT Jodhpur. I have participated in various singing competitions in fests such as Ignus, Spandan, Prometeo and the prestigious Inter-IIT Cultural Meet.
                        </p>
                    </span>
                    </div>
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default About
