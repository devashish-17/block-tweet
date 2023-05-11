import React from 'react'
import { BellIcon, BookmarkIcon, ChatBubbleOvalLeftEllipsisIcon, EllipsisHorizontalCircleIcon, EllipsisHorizontalIcon, HashtagIcon, HomeIcon, ListBulletIcon, RocketLaunchIcon, UserCircleIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <div className='fixed w-1/4 bg-white hidden lg:flex'>
      <div className="h-screen">
        <div className="flex flex-col justify-between h-full">
          <div className='grid justify-center'>
            <Link href={'/home'}><RocketLaunchIcon className='h-16 w-16 my-4 text-orange-600' /></Link>
            <div className='navItems '> <HomeIcon className='h-7 w-7' /> <span className='text-lg'> Home </span> </div>
            <div className='navItems'> <HashtagIcon className='h-7 w-7' /> <span className='text-lg'> Explore </span> </div>
            <div className='navItems'>
              <div className='relative'>
                <BellIcon className='h-7 w-7' />
                <span className='absolute bg-orange-500 rounded-full text-sm text-white h-5 w-6 flex justify-center -top-2 -right-1'>5+</span>
              </div> <span className='text-lg'> Notifications </span>
            </div>
            <div className='navItems'> <ChatBubbleOvalLeftEllipsisIcon className='h-7 w-7' /> <span className='text-lg'> Messages </span> </div>
            <div className='navItems'> <BookmarkIcon className='h-7 w-7' /> <span className='text-lg'> Bookmarks </span> </div>
            <div className='navItems'> <ListBulletIcon className='h-7 w-7' /> <span className='text-lg'> Lists </span> </div>
            <div className='navItems'> <UserGroupIcon className='h-7 w-7' /> <span className='text-lg'> Groups </span> </div>
            <div className='navItems'> <EllipsisHorizontalCircleIcon className='h-7 w-7' /> <span className='text-lg'> More </span> </div>
          </div>

          <div className='flex justify-end'>
            <Link href={'/profile'}>
              <div className="flex items-center w-72">
                <div className="h-16 w-16 mr-2"><UserCircleIcon className="h-16 w-16" /></div>
                <div className='grow'>
                  <div className='flex items-center justify-between'>
                    <span className="font-bold text-lg"> Profile </span>
                    <EllipsisHorizontalIcon className="h-6 w-6 cursor-pointer" />
                  </div>
                  <span className="text-sm font-semibold text-gray-500">@UserName</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Sidebar