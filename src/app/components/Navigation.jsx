import React from 'react'

function Navigation() {
  return (
    <nav className='fixed top-0 left-0 w-full flex justify-center pt-1 pb-10 bg-gradient-to-b from-[#F6E9F2] to-[#FFFFFF]'>
    <ul className='flex space-x-12 mt-3 px-20 py-4 bg-gradient-to-r from-[#FCFBF5] to-[#FBFBFE] border-2 border-white rounded-4xl'>
        <li className='hover:underline'><a className='text-[20px]' href='#top'>Home</a></li>
        <li className='hover:underline'><a className='text-[20px]' href='#aboutme'>About Me</a></li>
        <li className='hover:underline'><a className='text-[20px]' href='#myservices'>My Services</a></li>
        <li className='hover:underline'><a className='text-[20px]' href='#portfolio'>My Portfolio</a></li>
        <li className='hover:underline'><a className='text-[20px]' href='#top'>Contact Me</a></li>
    </ul>
</nav>

  )
}

export default Navigation