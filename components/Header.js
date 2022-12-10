import React from 'react'

export default function Header() {
  return (
    <div className="pt-16">
      <div
        className="flex h-[60vh] flex-col items-center justify-center bg-cover bg-scroll bg-center py-32 text-center lg:h-[95vh] lg:bg-fixed"
        style={{
          backgroundImage: `linear-gradient(
            to bottom,
            rgba(10, 20, 30, 0.82),
            rgba(20, 20, 30, 0.5)
          ), url('https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60')`,
        }}
      >
        <p className="mx-7 mb-4 border px-6 text-5xl font-bold uppercase text-gray-100  shadow-lg shadow-cyan-500/30 lg:text-8xl ">
          Syg Biotech
        </p>
        <p className="font-s px-10 pt-3 text-xl leading-snug text-gray-200 lg:max-w-4xl lg:pt-6 lg:text-3xl">
          Solution brevetée pour la quantification de biomarqueurs protéiques et
          le criblage de candidat médicament
        </p>
      </div>
    </div>
  )
}
