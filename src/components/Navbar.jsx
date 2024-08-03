import React from 'react'
import Navbaritem from './Navbaritem'

export default function Navbar() {
  return (
    <div className='flex bg-gray-600 p-4 lg:text-lg justify-center gap-6'>
        <Navbaritem title="Trending" param='fetchTrending'/>
        <Navbaritem title="Top Rated" param='fetchToprated'/>

    </div>
  )
}
