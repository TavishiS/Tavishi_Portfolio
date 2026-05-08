import React, { useState } from 'react';
import { RiCloseLine, RiMenu2Line } from '@remixicon/react';
import resumePDF from '../assets/resume.pdf';

const Navbar = () => {
    const [menu, openMenu] = useState(false);
    const [showMenu, setShowMenu] = useState(true);

    return (
        // Added z-50 and sticky/fixed (optional) to keep it visible while scrolling
        <nav className='flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20 z-50 relative'>
            
            <span className='text-xl font-bold tracking-wide font-mono'>
                <span className="text-blue-400">~/</span>tavishi's portfolio world
            </span>

            {/* Added a space before mx-24 to fix the concatenation bug */}
            <ul className={`${menu ? "block" : "hidden"} w-full md:w-auto mx-24 py-2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6 transition-all duration-300`}>
                <a href="#About">
                    <li className='text-md transition-all duration-300 p-1 md:p-0 hover:text-blue-400'>About</li>
                </a>
                <a href="#Education">
                    <li className='text-md transition-all duration-300 p-1 md:p-0 hover:text-blue-400'>Education</li>
                </a>
                <a href="#Courses">
                    <li className='text-md transition-all duration-300 p-1 md:p-0 hover:text-blue-400'>Courses</li>
                </a>
                <a href="#Skills">
                    <li className='text-md transition-all duration-300 p-1 md:p-0 hover:text-blue-400'>Skills</li>
                </a>
                <a href="#Projects">
                    <li className='text-md transition-all duration-300 p-1 md:p-0 hover:text-blue-400'>Projects</li>
                </a>
                
                <a href={resumePDF} target="_blank" rel="noopener noreferrer">
                    <li className='text-md transition-all duration-300 p-1 md:p-0 text-blue-400 hover:text-white border-b-2 border-blue-400 md:border-none'>
                        Resume
                    </li>
                </a>

                <a href="#Footer">
                    <li className='text-md transition-all duration-300 p-1 md:p-0 hover:text-blue-400'>Contact</li>
                </a>
            </ul>

            {/* Icon Toggles */}
            <div className="md:hidden">
                {showMenu ? (
                    <RiMenu2Line 
                        size={30} 
                        className='transition-all duration-300 cursor-pointer' 
                        onClick={() => {
                            openMenu(!menu);
                            setShowMenu(!showMenu);
                        }} 
                    />
                ) : (
                    <RiCloseLine 
                        size={30} 
                        className='transition-all duration-300 cursor-pointer' 
                        onClick={() => {
                            openMenu(!menu);
                            setShowMenu(!showMenu);
                        }} 
                    />
                )}
            </div>
        </nav>
    );
};

export default Navbar;