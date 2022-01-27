import Head from 'next/head'
import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'

function Layout({ children, title }) {
  return (
    <div className="flex min-h-screen flex-col bg-secondaryd text-gray-100d">
      <Head>
        <title>Syg-Biotech | {title}</title>
      </Head>
      <div className="bg-secondary text-gray-50 fixed w-full shadow-lg">
        <Navbar />
      </div>
      <div className="">
        <Header />
      </div>
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
