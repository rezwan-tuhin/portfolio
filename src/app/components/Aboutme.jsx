'use client'
import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';
import code from '../../../assets/code.png'
import education from '../../../assets/education.png'
import briefcase from '../../../assets/briefcase.png'

function Aboutme() {
    return (
        <motion.div initial={{opacity:0, y: 20}} whileInView={{opacity:1, y:0}} transition={{delay:0.3, duration:0.6, ease: "easeOut"}} id='aboutme' className='flex flex-col items-center w-full pt-40'>
            <h3 className='text-[24px] text-[#242424] leading-[27px]'>Introduction</h3>
            <h1 className='text-[60px] text-[#242424] leading-[68px]'>About me</h1>
            <div className='flex justify-between px-4 space-x-12 max-w-8/12'>
                <div>
                    <div className='pl-4'>
                        <p className='text-[20px] text-[#565656] text-center'>
                            I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth
                        </p>
                    </div>
                </div>
                
            </div>
            <div className='flex justify-center space-x-14 pt-4 mt-4'>
                    <div className='w-[200px] h-[195px] border-[1px] border-[#d8d8d8] p-4 pt-8 rounded-2xl hover:border-r-4 hover:border-b-4 hover:border-r-black hover:border-b-black cursor-pointer transition-[0.3s]'>
                        <Image src={code} alt='' width={22} className='pb-7'/>
                        <h4 className='text-[20px] text-[#494949] pb-3'>Languages</h4>
                        <p className='text-[15px] text-[#797979]'>HTML, CSS, JavaScript, React Js, Next Js, Solidity</p>
                    </div>
                    <div className='w-[200px] h-[195px] border-[1px] border-[#d8d8d8] p-4 pt-8 rounded-2xl hover:border-r-4 hover:border-b-4 hover:border-r-black hover:border-b-black cursor-pointer transition-[0.3s]'>
                        <Image src={education} alt='' width={28} className='pb-7'/>
                        <h4 className='text-[20px] text-[#494949] pb-3'>Education</h4>
                        <p className='text-[15px] text-[#797979]'>HTML, CSS, JavaScript, React Js, Next Js, Solidity</p>
                    </div>
                    <div className='w-[200px] h-[195px] border-[1px] border-[#d8d8d8] p-4 pt-8 rounded-2xl hover:border-r-4 hover:border-b-4 hover:border-r-black hover:border-b-black cursor-pointer transition-[0.3s]'>
                        <Image src={briefcase} alt='' width={24} className='pb-7'/>
                        <h4 className='text-[20px] text-[#494949] pb-3'>Projects</h4>
                        <p className='text-[15px] text-[#797979]'>Built more than 5 projects</p>
                    </div>
                </div>
        </motion.div>
    )
}

export default Aboutme;