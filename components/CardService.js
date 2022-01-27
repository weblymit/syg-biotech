import React from 'react'
import { ImLab } from 'react-icons/im'

export default function CardService({ title, text }) {
  return (
    <div className="mt-4s flex flex-col rounded bg-gray-100 px-5 py-10 text-center text-gray-700">
      <ImLab className="mx-auto text-4xl text-secondary" />
      <p className="pb-2 pt-5 text-2xl font-bold ">{title}</p>
      <p>{text}</p>
    </div>
  )
}
