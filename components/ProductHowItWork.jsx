import React from 'react'
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5'
import { H2, SubText } from './H2'

const CardSection = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center px-5">
      <IoCheckmarkDoneCircleOutline className="pb-2 text-[70px] text-secondary" />
      <p className="pb-2 text-center text-xl font-bold">{title}</p>
      <p>{description}</p>
    </div>
  )
}

export default function ProductHowItWork() {
  return (
    <div className="py-20s lg:container lg:px-8 ">
      <div className="ptb-2 lg:pb-8">
        <h2 className="lg:text-5kxl pb-6 text-center text-4xl font-semibold text-secondary">
          Comment ça marche ?
        </h2>
        <p className="pb-4 text-center">
          La technologie de SYG BIOTECH peut être utilisée à la fois pour :
        </p>
      </div>

      <div className="grid-cols-2 gap-y-14 gap-x-6 space-y-10 lg:mx-auto lg:grid lg:max-w-4xl lg:space-y-0">
        <CardSection title="Détecter et quantifier biomarqueur protéique" />
        <CardSection
          title="Déterminer le potentiel inhibiteur des composés bloquants
             "
        />
      </div>
      <div className="pt-10 text-center lg:mx-auto lg:max-w-4xl lg:text-lg">
        <p>
          Les deux protocoles sont faciles à utiliser et peuvent être adaptés à
          un large éventail de questions de recherche.
        </p>
      </div>
    </div>
  )
}
