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
      label: 'Accueil',
      href: '/',
    },
    {
      label: 'Qui sommes nous ?',
      href: '/',
    },
    {
      label: 'Contact',
      href: '/',
    },
  ]
  return (
    <nav className="container px-5 py-5 ">
      <ul className="flex justify-between items-center">
        <li>
          <Link href="/">
            <a className="pointer text-2xl font-black">Syg-Biotech</a>
          </Link>
        </li>
        <div className="hidden items-center justify-between space-x-4 text-lg font-bold lg:flex">
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
            className="text-5xl bg-gray-300 shadow-lg text-secondary rounded-lg"
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
