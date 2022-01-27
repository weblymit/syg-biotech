import React from 'react'

export default function Header() {
  return (
    <div className="pt-20">
      <div
        className="flex h-[60vh] flex-col items-center justify-center bg-scroll bg-cover bg-center py-32 text-center lg:h-[90vh]"
        style={{
          backgroundImage: `linear-gradient(
            to bottom,
            rgba(10, 20, 30, 0.82),
            rgba(20, 20, 30, 0.5)
          ), url('https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60')`,
        }}
      >
        <p className="px-6 text-5xl font-bold uppercase  text-gray-100 md:text-5xl">
          Syg-Biotech
        </p>
        <p className="px-10 pt-4 font-semibolds text-xl text-gray-200 leading-snug">
          slogan laboratoire de test et de recherche medicale dans le domaine de la biotechnologie
        </p>
      </div>
    </div>
  )
}
