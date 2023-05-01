import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-r from-[#a4c0c5] to-[#c9d8d2]'>
        <div className='flex flex-col justify-center items-center w-full h-full rounded-full'>
            <p className='text-2xl sm:text-6xl border-[#56615c] border-b-4 my-8 text-[#56615c] '>About Me!</p>
            <p className='w-fill max-w-[700px] m-2 p-6 sm:text-2xl text-center text-overflow '>Hi there! I'm Austin Cheer, a Software Engineer with a passion for using technology to bring people together. I have nine years of experience in the furniture industry, where I gained valuable skills in project management, communication, and leadership. I am excited to apply these skills to my new career as a Software Engineer and make a positive impact through technology.</p>
        </div>
    </div>
  )
}

export default About