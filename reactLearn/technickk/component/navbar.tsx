import React from 'react'
import Link from 'next/link'

const navbar = () => {
  return (
    <nav className='bg-black text-white flex px-10 space-between item-center h-10'>
      <div className="logo">
        <div className="navbtn">
          <button>{"<"}</button>
          <button>{">"}</button>
        </div>
        <div style={{fontWeight: 700, fontSize: 30}}>
          TechNickk
        </div>
      </div>
      <ul className="flex space-between">
          <li><Link href="/"> Home </Link></li>
          <li><Link href="/about"> About </Link></li>
          <li><Link href="/help"> Help & Support </Link></li>
          <li><Link href="/contact"> Contact </Link></li>
      </ul>
    </nav>
  )
}

export default navbar