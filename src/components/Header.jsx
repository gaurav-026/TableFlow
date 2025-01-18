import React from 'react'
import { RiAccountCircleFill } from 'react-icons/ri';
import { useLocation } from 'react-router-dom'

const Header = () => {

  const location = useLocation();

  return (
    <div className='bg-white py-2 flex justify-between lg:px-10 md:px-8 px-5 shadow-md'>
      <h1 className='text-2xl pt-1 font-kavoon text-green rounded-full bg-white'>TableFlow</h1> 
      <div className='flex gap-4 bg-white items-center'>
      <button className='bg-green rounded-full px-3 py-2 text-white font-semibold text-sm'>
{location.pathname === '/' ? 'Sign Up' : 'Profile'}
      </button>
      <div ><RiAccountCircleFill size={40} color='grey'/></div>
      </div>
    </div>
  )
}

export default Header
