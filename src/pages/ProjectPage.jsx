import React from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Link } from 'react-router-dom';

function ProjectPage() {
    return (
        <div className='min-h-screen w-full px-4 select-none bg-[#121212] flex justify-center pb-10'>
            <div className='w-full sm:w-[80%] md:w-[70%] lg:w-[40%] h-full pt-[100px] space-y-3'>
                <h1 className='text-[28px] font-[poppins] text-[#ffd400] font-bold'>Projects</h1>
                <div className='w-full h-auto flex flex-col space-y-7 items-center'>

                    <div className='bg-[#212121] rounded-md p-3 w-full h-full space-y-2'>
                        <div className='flex items-start'>
                            <Link to={"https://blogbuzz-72f9.onrender.com"}>
                                <h2 className='leading-none font-[poppins] underline cursor-pointer text-white text-[26px]'>
                                    BlogBuzz
                                </h2>
                            </Link>
                            <ArrowOutwardIcon sx={{ color: "#fff", fontSize: "20px" }} />
                        </div>
                        <p className='font-jetbrains  text-[#888888] text-[14px]'>A Blog website with user authentication, allowing secure sign-up and login. Users can create, read, update, and delete their Blog.</p>
                        <h3 className='text-[#ffd400] font-[poppins]'>Tech Stack - <span className='text-[14px] font-jetbrains text-white'>
                            MongoDB, Express, React, Node.js </span></h3>
                    </div>


                    <div className='bg-[#212121] rounded-md p-3 w-full h-full space-y-2'>
                        <div className='flex items-start'>
                            <Link to={"https://tasktrail-rq81.onrender.com"}>
                                <h2 className='leading-none font-[poppins] underline cursor-pointer text-white text-[26px]'>
                                    TaskTrail
                                </h2>
                            </Link>
                            <ArrowOutwardIcon sx={{ color: "#fff", fontSize: "20px" }} />
                        </div>
                        <p className='font-jetbrains  text-[#888888] text-[14px]'>A Todo website with user authentication. Users can create, read, update, and delete tasks, with a visual progress bar to track completion.</p>
                        <h3 className='text-[#ffd400] font-[poppins]'>Tech Stack - <span className='text-[14px] font-jetbrains text-white'>
                            MongoDB, Express, React, Node.js </span></h3>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default ProjectPage