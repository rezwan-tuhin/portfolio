import React from 'react'
import { Outfit } from 'next/font/google'
import { outfit } from '../layout'

function MyServices() {
    return (
        <div id='myservices' className='flex flex-col pt-40'>
            <div className='flex flex-col items-center'>
                <h4 className='text-[24px] text-[rgb(36,36,36)] text-center leading-[27px]'>What I offer</h4>
                <h1 className='text-[60px] text-[#242424] text-center leading-[68px]'>My services</h1>
                <p className='max-w-[764px] text-[20px] text-[#565656] text-center'>I am a frontend developer from California, USA with 10 years of experience in multiple
                    companies like Microsoft, Tesla and Apple</p>
            </div>
            <div className='flex justify-around mt-10 px-20'>
                <div className='flex flex-col justify-around border-[2px] border-[#EFEFEF] rounded-xl p-3 px-5 w-[335px] h-[330px] pt-8 hover:border-r-4 hover:border-b-4 hover:border-r-black hover:border-b-black hover:bg-[#FCF4FF] transition-[0.3s]'>
                    <h2 className={`text-[24px] text-[#282828] ${outfit.className}`}>Smart contract development</h2>
                    <p className={`text-[16px] text-[#797979] ${outfit.className}`}>smart contract is a decentralized, self-executing contract...</p>
                    <a className='text-[#797979] text-[16px]' href="#">Read more &rarr;</a>
                </div>
                <div className='flex flex-col justify-around border-[2px] border-[#EFEFEF] rounded-xl p-3 px-5 w-[335px] h-[330px] pt-8 hover:border-r-4 hover:border-b-4 hover:border-r-black hover:border-b-black hover:bg-[#FCF4FF] transition-[0.3s]'>
                    <h2 className={`text-[24px] text-[#282828] ${outfit.className}`}>Complete dApp development</h2>
                    <p className={`text-[16px] text-[#797979] ${outfit.className}`}>smart contract is a decentralized, self-executing contract...</p>
                    <a className='text-[#797979] text-[16px]' href="#">Read more &rarr;</a>
                </div>
                <div className='flex flex-col justify-around border-[2px] border-[#EFEFEF] rounded-xl p-3 px-5 w-[335px] h-[330px] pt-8 hover:border-r-4 hover:border-b-4 hover:border-r-black hover:border-b-black hover:bg-[#FCF4FF] transition-[0.3s]'>
                    <h2 className={`text-[24px] text-[#282828] ${outfit.className}`}>Smart contract development</h2>
                    <p className={`text-[16px] text-[#797979] ${outfit.className}`}>smart contract is a decentralized, self-executing contract...</p>
                    <a className='text-[#797979] text-[16px]' href="#">Read more &rarr;</a>
                </div>
            </div>
        </div>
    )
}

export default MyServices