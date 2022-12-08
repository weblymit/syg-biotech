import Link from 'next/link'
import React from 'react'

export default function MoreAbout({ href = '/', color = 'text-yellow-200' }) {
  return (
    <Link href={href}>
      <p
        className={`tex cursor-pointer pt-12 text-center lg:text-lg ${color} uppercase underline underline-offset-4`}
      >
        En savoir plus
      </p>
    </Link>
  )
}
