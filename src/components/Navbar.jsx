import React from 'react'
import NavbarItem from './NavbarItem'

export default function Navbar() {
  return (
    <div className='flex items-center justify-center dark:bg-gray-600 bg-amber-100 p-4 gap-8' >
        <NavbarItem title="Trending" param="trending"/>
        <NavbarItem title="Top Rated" param="topRated"/>
    </div>
  )
}
