import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { IoMenuOutline } from 'react-icons/io5'
import Hamburger from './Hamburger'

export default function Navbar() {
  const router = useRouter()
  const routeSlug = router.route
  const [show, setShow] = useState(false)
  const handleShow = () => {
    setShow(!show)
  }

  const menuLinks = [
    {
      label: 'à propos de nous',
      href: '#about',
    },
    {
      label: 'Notre Technologie',
      href: '#technology',
    },
    {
      label: 'Avantages',
      href: '#advantage',
    },
    {
      label: 'Early Access',
      href: '#early-access',
    },
    {
      label: 'Contact',
      href: '/contact',
    },
  ]
  return (
    <nav className="container px-5 py-3 lg:py-4 ">
      <ul className="flex items-center justify-between">
        <li>
          <Link href="/">
            <a className="pointer border p-2 text-2xl font-black uppercase">
              Syg Biotech
            </a>
          </Link>
        </li>
        <div className="text-lgs hidden items-center justify-between space-x-4 font-medium uppercase lg:flex">
          {menuLinks.map(({ href, label, style, category }) => (
            <li
              key={`${href}${label}`}
              className={`py-2 ${
                style == 'style'
                  ? 'rounded-lg bg-pink-600 px-2 text-lg font-bold text-gray-100 shadow'
                  : ''
              } ${href == routeSlug ? 'activeClass' : ''}`}
            >
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </div>
        <div className="lg:hidden ">
          <IoMenuOutline
            className="rounded-lg bg-gray-300 text-5xl text-secondary shadow-lg"
            onClick={handleShow}
          />
        </div>
      </ul>
      <div className="lg:hidden">
        {show ? (
          <Hamburger
            menuLinks={menuLinks}
            routeSlug={routeSlug}
            handleShow={handleShow}
          />
        ) : null}
      </div>
    </nav>
  )
}
