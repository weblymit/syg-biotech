import Link from 'next/link'
import React from 'react'
import { IoClose } from 'react-icons/io5'

export default function Hamburger({ menuLinks, routeSlug, handleShow }) {
  return (
    <div className="relatived w-full">
      <div className="absolute rounded-lg bg-gray-200 text-secondary top-6 left-5 right-5  pt-6 pb-12 font-bold text-gray-800">
        <div className="flex justify-end px-8 pb-2">
          <IoClose className="text-4xl" onClick={handleShow} />
        </div>
        <ul className=" space-y-2 px-12 text-center text-lg ">
          {menuLinks.map(({ href, label, style, category }) => (
            <li
              key={`${href}${label}`}
              className={` ${
                style == 'style'
                  ? 'mx-12 rounded-lg bg-blue-700 p-3 text-gray-100'
                  : ''
              } ${href == routeSlug ? 'activeClass' : ''}`}
            >
              <Link href={href}>{label}</Link>
            </li>
          
          ))}
        </ul>
      </div>
    </div>
  )
}
