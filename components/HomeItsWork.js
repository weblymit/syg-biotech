import React from 'react'
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5'
import { H2, SubText } from './H2'
import ProductSectionOne from './ProductSectionOne'
import ProductSectionTwo from './ProductSectionTwo'

const CardSection = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center lg:px-5">
      <IoCheckmarkDoneCircleOutline className="pb-2 text-[70px] text-secondary" />
      <p className="pb-2 text-xl font-bold">{title}</p>
      <p>{description}</p>
    </div>
  )
}
export default function HomeItsWork() {
  return (
    <div className="">
      <div
        className="bg-cover  bg-center  py-14 text-center lg:py-24"
        style={{
          backgroundImage: `linear-gradient(
            to bottom,
            rgba(1, 10, 10, 0.1),
            rgba(20, 20, 30, 0.0)
          ), url('/bg2.jpeg')`,
        }}
      >
        <div className="py-20s container lg:px-8 ">
          <div className="lg:pb-10">
            <H2 title="Comment ça marche ?" className="" />
            <div className="font-light lg:mx-auto lg:max-w-md lg:pt-8">
              <SubText title="La technologie de SYG BIOTECH peut être utilisée à la fois pour :" />
            </div>
          </div>

          <div className="grid-cols-2 gap-y-14 gap-x-6 space-y-10 lg:mx-auto lg:grid lg:max-w-4xl lg:space-y-0">
            <CardSection title="Détecter et quantifier biomarqueur protéique" />
            <CardSection title="Déterminer le potentiel inhibiteur des composés bloquants" />
          </div>
          <div className="pt-16 lg:mx-auto lg:max-w-3xl lg:text-lg">
            <p>
              Les deux protocoles sont faciles à utiliser et peuvent être
              adaptés à un large éventail de questions de recherche.
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <ProductSectionOne />
        <ProductSectionTwo />
      </div>
    </div>
  )
}
