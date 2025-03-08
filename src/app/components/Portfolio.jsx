import React from 'react'
import Image from 'next/image'
import frontend from '../../../assets/frontend.png'

function Portfolio() {
    return (
        <div id='portfolio' className='flex flex-col items-center mt-40'>
            <div className='flex flex-col items-center'>
                <h4 className='text-[24px] text-[rgb(36,36,36)] text-center leading-[27px]'>My portfolio</h4>
                <h1 className='text-[60px] text-[#242424] text-center leading-[68px]'>My latest work</h1>
                <p className='max-w-[764px] text-[20px] text-[#565656] text-center'>Welcome to my dApp development portfolio! Explore a collection of projects showcasing
                    my expertise in front-end development</p>
            </div>

            <div className='flex flex-row justify-start gap-8'>
                <div className='flex flex-col mt-10'>
                    <Image src={frontend} alt='' width={300} className='rounded-2xl' />
                    <div className='relative w-[250px] h-[83px] bottom-28 left-8 bg-white rounded-xl flex flex-col gap-y-1 p-4'>
                        <h2 className='text-[18px] text-[#2A2A2A] font-bold'>dApp Project</h2>
                        <p className='text-[16px] text-[#5E5E5E]'>Blockchain</p>
                    </div>
                </div>
                <div className='flex flex-col mt-10'>
                    <Image src={frontend} alt='' width={300} className='rounded-2xl' />
                    <div className='relative w-[250px] h-[83px] bottom-28 left-8 bg-white rounded-xl flex flex-col gap-y-1 p-4'>
                        <h2 className='text-[18px] text-[#2A2A2A]'>dApp Project</h2>
                        <p className='text-[16px] text-[#5E5E5E]'>Blockchain</p>
                    </div>
                </div>
                <div className='flex flex-col mt-10'>
                    <Image src={frontend} alt='' width={300} className='rounded-2xl' />
                    <div className='relative w-[250px] h-[83px] bottom-28 left-8 bg-white rounded-xl flex flex-col gap-y-1 p-4'>
                        <h2 className='text-[18px] text-[#2A2A2A]'>dApp Project</h2>
                        <p className='text-[16px] text-[#5E5E5E]'>Blockchain</p>
                    </div>
                </div>
            </div>
            <button className='px-8 py-4 border-[1px] border-[#A7A7A7] rounded-4xl text-[18px] text-[#6F6F6F] cursor-pointer hover:bg-[#f5f1f1] transition-[0.3s]'>Show more &rarr;</button>
        </div>

    )
}

export default Portfolio