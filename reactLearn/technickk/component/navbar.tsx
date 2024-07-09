import React from 'react'

const navbar = () => {
  return (
    <nav className='bg-black text-white flex px-10 space-between item-center h-10'>
        <div className="logo">TechNickk</div>
        <ul className="flex space-between">
            <li>Home</li>
            <li>About</li>
            <li>Help & Support</li>
            <li>Contact</li>
            <li>About</li>
        </ul>
    </nav>
  )
}

export default navbar
