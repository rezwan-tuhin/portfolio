import React from 'react'
import Image from 'next/image'
import tuhin from '../../../assets/tuhin.jpg'

function HeroSection() {
    return (
        <div className='flex flex-col items-center bg-white mt-40'>
            <Image src={tuhin} alt='' className='rounded-full' width={158} height={158} />
            <p className='text-[28px] pt-4 text-center pb-8'>Hi! I'm Rezwan Tuhin</p>
            <h1 className='text-[80px] text-[#191919] text-center w-[847px] leading-none'>Full Stack dApp Developer</h1>
            <p className='text-[20px] w-[764px] h-[80px] text-center pt-4 leading-6'>I am a frontend developer from California, USA with 10 years of experience in multiple
                companies like Microsoft, Tesla and Apple.</p>

            <div className='flex justify-between space-x-8 pt-8'>
                <button className='flex justify-between bg-[#202020] text-white px-7 py-3 border-2 border-[#202020] rounded-4xl text-[18px] hover:bg-white hover:border-2 hover:border-[#202020] hover:text-[#202020] transition-[0.3s] cursor-pointer'>connect with me</button>
                <button className='flex justify-between border-2 border-[#252525] px-12 py-3 rounded-4xl text-[18px] text-[#202020] hover:bg-[#dddddd] cursor-pointer transition-[0.3s]'>my resume</button>
            </div>
        </div>
    )
}

export default HeroSection