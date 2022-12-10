import React from 'react'

export default function HeaderTwo({ headerTitle }) {
  return (
    <div className="pt-16">
      <div
        className="flex h-[30vh] flex-col items-center justify-center bg-cover bg-scroll  bg-center py-32 text-center lg:h-[45vh] lg:bg-fixed"
        style={{
          backgroundImage: `linear-gradient(
            to bottom,
             rgba(10, 20, 30, 0.82),
            rgba(20, 20, 30, 0.5)
          ), url('https://images.unsplash.com/photo-1582719471863-f4c7006280cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1693&q=80')`,
        }}
      >
        <p className="mx-14 mb-4 border py-6 px-3 text-3xl  font-bold uppercase text-gray-100 shadow-lg shadow-cyan-500/30 lg:px-6 ">
          {headerTitle}
        </p>
      </div>
    </div>
  )
}
