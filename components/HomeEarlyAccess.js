import React from 'react'
import MoreAbout from './MoreAbout'

export default function EarlyAccess() {
  return (
    <div className="container px-5 py-20 text-center text-gray-100 lg:py-44">
      <p className="font-bold uppercase text-gray-300 lg:text-2xl">
        Early access
      </p>
      <div className="lg:mx-auto lg:max-w-3xl">
        <p className="px-2 pt-4 text-2xl font-black leading-normal lg:text-5xl lg:leading-snug">
          Rejoignez notre équipe de partenaires et collaborateurs
        </p>
        <div className="">
          <MoreAbout href="early-access" />
        </div>
      </div>
    </div>
  )
}
