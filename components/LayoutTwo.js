import Head from 'next/head'
import React from 'react'
import Footer from './Footer'
import HeaderTwo from './HeaderTwo'
import NavbarTwo from './NavbarTwo'

function LayoutTwo({ children, title, headerTitle }) {
  return (
    <div className="bg-secondaryd text-gray-100d flex min-h-screen flex-col">
      <Head>
        <title>Syg-Biotech | {title}</title>
      </Head>
      <div className="fixed w-full bg-secondary text-gray-50 shadow-lg">
        <NavbarTwo />
      </div>
      <div className="">
        <HeaderTwo headerTitle={headerTitle} />
      </div>
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}

export default LayoutTwo
