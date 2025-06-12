import React from 'react'



const ProjectCard = ({title, main, bannerImg, rep_link, git_link}) => {
  return (
    <div className='p-3 md:p-6 flex flex-col justify-between w-80 min-h-[500px] bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl'>
        <img className='p-4' src={bannerImg} alt=""></img>
        <h3 className='px-4 text-xl md:text-2xl font-bold leading-normal'>
            {title}
        </h3>
        <p className='px-4 text-sm md:text-md leading-tight py-2 flex-1'>{main}</p>
        <div className='mt-auto p-2 md:p-4 flex gap-2 md:gap-4'>
            <button className='md:mb-2 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'><a href={rep_link}>Report</a></button>

            <button className='md:mb-2 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'><a href={git_link}>Github</a></button>
        </div>
    </div>
  )
}

export default ProjectCard
