import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-800 p-1 md:p-4 flex justify-center items-center text-white gap-1 static bottom-0 w-full'>
        <p className='font-semibold'> Made With</p>
        <span className='font-semibold'><img src="/icons/heart.png" alt="Love" className='w-8'/></span>
        <span className='font-semibold '>By <a className='text-green-400' href="https://github.com/naumaanansari" target='_blank'>@naumaanansari</a></span>
        
    </div>
  )
}

export default Footer