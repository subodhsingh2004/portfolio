import React from 'react'

function AboutPage() {
    return (
        <div className='min-h-screen w-full select-none px-4 bg-[#121212] flex justify-center'>
            <div className='w-full sm:w-[80%] md:w-[70%] lg:w-[40%] h-full pt-[120px] space-y-8 pb-10'>
                <div>
                    <h1 className='text-[28px] font-[poppins] text-[#ffd400] font-bold'>Education</h1>

                    <div className='w-full h-auto flex flex-col space-y-2 items-center'>

                        <div className='bg-[#212121] rounded-md p-3 w-full h-full flex justify-between'>
                            <div className='flex items-start flex-col leading-6'>
                                <h2 className='text-white font-[poppins] font-medium text-[16px] sm:text-[18px]'>Maharishi Dayanand University</h2>
                                <h3 className='text-[#898989] text-[14px] sm:text-[16px] font-[poppins]'>B.Tech in Computer Science </h3>
                            </div>
                            <div className='flex items-start flex-col leading-6'>
                                <h3 className='font-jetbrains text-[#ffd400] text-right w-full'>7.4 CGPA</h3>
                            </div>
                        </div>

                        <div className='bg-[#212121] rounded-md p-3 w-full h-full flex justify-between'>
                            <div className='flex items-start flex-col leading-6'>
                                <h2 className='text-white font-[poppins] font-medium text-[16px] sm:text-[18px]'>Atal Adarash Vidhyalay</h2>
                                <h3 className='text-[#898989] text-[14px] sm:text-[16px]     font-[poppins]'>Senior Secondary School</h3>
                            </div>
                            <div className='flex items-start flex-col leading-6'>
                                <h3 className='font-jetbrains text-[#ffd400] text-right w-full'>80.2%</h3>
                            </div>
                        </div>

                    </div>
                </div>

                <div>
                    <h1 className='text-[28px] font-[poppins] text-[#ffd400] font-bold'>Skills</h1>

                    <div className='w-full h-auto flex flex-col space-y-7 items-center'>

                        <div className='bg-[#212121] rounded-md p-3 w-full h-full flex flex-col justify-between'>
                            <div className='leading-7 sm:hidden'>
                                <h1 className='text-white font-jetbrains'>Java Javascript</h1>
                                <h1 className='text-white font-jetbrains'>HTML CSS Tailwind ReactJS</h1>
                                <h1 className='text-white font-jetbrains'>NodeJS Express</h1>
                                <h1 className='text-white font-jetbrains'>MongoDB</h1>
                            </div>
                            <div className='hidden sm:block'>
                                <div className='flex space-x-1'>
                                    <h1 className='min-w-fit text-white font-jetbrains'>Programming -</h1>
                                    <span className='text-[#898989] font-[poppins]'> Java, Javascript</span>
                                </div>
                                <div className='flex space-x-1'>
                                    <h1 className='min-w-fit text-white font-jetbrains'>Frontend -</h1>
                                    <span className='text-[#898989] font-[poppins]'>HTML, CSS, Tailwind, React</span>
                                </div>
                                <div className='flex space-x-1'>
                                    <h1 className=' text-white font-jetbrains'>Backend -</h1>
                                    <span className='text-[#898989] font-[poppins]'>NodeJS, Express</span>
                                </div>
                                <div className='flex space-x-1'>
                                    <h1 className=' text-white font-jetbrains'>Database -</h1>
                                    <span className='text-[#898989] font-[poppins]'>MongoDB</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage