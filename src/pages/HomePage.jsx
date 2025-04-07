import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <>
            <div className='h-screen w-full select-none bg-[#121212] flex justify-center items-center'>
                <main className='flex flex-col p-3 sm:p-0 items-center leading-tight md:w-[55%]'>
                    <h2 className='text-white font-[poppins] font-bold text-[22px] md:text-[40px]'>Hi👋 I'm</h2>
                    <h1 className='font-[poppins] text-[#ffd400] text-[40px] md:text-[50px] lg:text-[80px] font-bold'>Subodh Singh</h1>
                    <h4 className='text-[white] text-[18px] md:text-[30px] font-[poppins]'>Full Stack Developer</h4>
                    <p className='text-[#a8a7a7] font-jetbrains text-[14px] md:text-sm text-center pt-6 leading-4 tracking-tighter'>Third-year Computer Science student with a strong focus on web development, partiuclary using the MERN stack (MongoDB, Express.js, React, Node.js). Proficient in building responsive and user friendly applications, with hands-on experience in full-stack development</p>

                    <ul className='pt-6 flex space-x-3'>
                        <Link to={"http://www.linkedin.com/in/subodh-singh-43596b267"}>
                            <li><LinkedInIcon sx={{color: "#a8a7a7", fontSize: "30px"}}/></li>
                        </Link>
                        <Link to={"https://x.com/SubodhSingh05"}>
                            <li><TwitterIcon sx={{color: "#a8a7a7", fontSize: "30px"}}/></li>
                        </Link>
                    </ul>
                </main>
            </div>
        </>
    )
}

export default HomePage