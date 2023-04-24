import { useState, useEffect } from 'react';

import { copy, linkIcon, loader, tick } from '../assets ';
const Demo = () => {
  return (
    <section className='mt-16 w-full max-w-xl '>
      <div className='flex flex-col w-full gap-2'>
        <form 
            className='relative flex justify-center items-center' 
            ons
            >
          <input
            className='w-full h-12 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'
            type="text"
            placeholder="Enter your email address"
          />
            </form>
      </div>
    </section>
  )
}

export default Demo