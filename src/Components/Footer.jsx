import React from 'react'
import {MdOutlineEmail} from 'react-icons/md'
import {CiLinkedin} from 'react-icons/ci'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <div id='Footer'className='flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center'>
      <div>
        <h1 className='text-xl md:text-4xl font-bold'>Contact Me :)</h1>
        <h3 className='text-sm md:text-2xl font-normal'>Feel free to reach out!</h3>
      </div>

      <ul className='text-sm md:text-xl'>
        <li className='flex gap-2 items-center'>
            <MdOutlineEmail size={20}/>
            Gmail : tavishi.srivastava2004@gmail.com
        </li>
        <li className='flex gap-2 items-center'>
            <CiLinkedin size={20}/>
            LinkedIn : <a href="https://www.linkedin.com/in/tavishi2004/">Connect</a>
        </li>
        <li className='flex gap-2 items-center'>
            <FaGithub size={20}/>
            Github : <a href="https://github.com/TavishiS">Visit profile</a>
        </li>
      </ul>
    </div>
  )
}

export default Footer
