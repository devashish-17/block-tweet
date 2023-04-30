import React from 'react'
import { MagnifyingGlassIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'


const Widgets = () => {
  return (
    <div className='fixed w-1/4 right-0 hidden lg:block'>
      <div className='flex bg-gray-200 mr-8 my-6 h-12 rounded-full items-center'>
        <MagnifyingGlassIcon className='h-6 w-6 mx-4' />
        <input type="text" placeholder='Search Twitter' className='bg-transparent outline-none' />
      </div>

      <div className='bg-gray-100 w-82 w-[22rem] p-3 rounded-lg'>
        <h2 className='text-2xl font-semibold text-orange-500'> What's Happening ? </h2>
        <br />
        <div className='my-3 -space-y-1'>
          <div className='flex justify-between'>
            <span className='text-sm text-gray-600'> Entertainment · Trending </span>
            <EllipsisHorizontalIcon className='h-6 w-6' />
          </div>
          <div className='text-lg font-semibold'> #BiggBoss16Finale </div>
          <span className='text-sm text-gray-600'> 59.8K Tweets </span>
        </div>

        <div className='my-3 -space-y-1'>
          <div className='flex justify-between'>
            <span className='text-sm text-gray-600'> Trending </span>
            <EllipsisHorizontalIcon className='h-6 w-6' />
          </div>
          <div className='text-lg font-semibold'> #Syria_earthquake </div>
          <span className='text-sm text-gray-600'> 6,630 Tweets </span>
        </div>

        <div className='my-3 -space-y-1'>
          <div className='flex justify-between'>
            <span className='text-sm text-gray-600'> Politics · Trending </span>
            <EllipsisHorizontalIcon className='h-6 w-6' />
          </div>
          <div className='text-lg font-semibold'> #TrumpsLaptop </div>
          <span className='text-sm text-gray-600'> 1,614 Tweets </span>
        </div>

        <div className='my-3 -space-y-1'>
          <div className='flex justify-between'>
            <span className='text-sm text-gray-600'> Trending </span>
            <EllipsisHorizontalIcon className='h-6 w-6' />
          </div>
          <div className='text-lg font-semibold'> Gen Z </div>
          <span className='text-sm text-gray-600'> 18.8K Tweets </span>
        </div>

        <span className='text-orange-500 cursor-pointer'> Show more </span>

      </div>
    </div>
  )
}

export default Widgets