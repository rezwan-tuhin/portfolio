import React from 'react'

function Footer() {
  return (
    <div className='mt-40 mb-10'>
        <div className='w-full flex flex-col items-center border-b-2 border-b-[#787878] pb-4 mb-4'>
            <h1 className='text-[50px] text-[#3a3838] leading-none'>Rezwan Tuhin</h1>
            <p className='text-[18px] text-[#565656]'>rezwan.tuhin@gmail.com</p>
        </div>

        <div className='flex justify-between px-5'>
            <div>
                <p className='text-[18px] text-[#565656]'>&copy; 2025 Rezwan Tuhin. All rights Reserved</p>
            </div>
            <div className='flex space-x-20'>
                <a href='#' className='text-[18px] text-[#565656]'>Terms of services</a>
                <a href='#' className='text-[18px] text-[#565656]'>Privacy policy</a>
                <a href='#' className='text-[18px] text-[#565656]'>Connect with me</a>
            </div>
        </div>
    </div>
  )
}

export default Footer