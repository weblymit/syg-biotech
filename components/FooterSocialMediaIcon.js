import React from 'react'
import { IconFb, IconInsta, IconTwitter } from './IconSocialMedia'

function FooterSocialMediaIcon() {
  const arraySocial = [
    {
      logo: IconTwitter,
      href: '/',
      name: 'twitter',
    },
    {
      logo: IconInsta,
      href: '/',
      name: 'insta',
    },
    {
      logo: IconFb,
      href: '/',
      name: 'facebook',
    },
  ]
  return (
    <div className="pb-8 pt-3">
      <p className="text-center text-sm font-light text-secondary">
        © Copyright 2020 <span className='uppercase'>syd-biotech</span>
      </p>
      <div className="mt-4 flex items-center justify-center space-x-4 sm:mt-0 ">
        {arraySocial.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-deep-purple-100 hover:text-teal-accent-400 transition-colors duration-300"
          >
            {item.logo}
          </a>
        ))}
      </div>
    </div>
  )
}

export default FooterSocialMediaIcon
