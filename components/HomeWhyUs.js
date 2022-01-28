import React from 'react'
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5'
import { H2, SubText } from './H2'

const CardSection = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center px-5">
      <IoCheckmarkDoneCircleOutline className="pb-2 text-[70px] text-secondary" />
      <p className="pb-2 text-xl font-bold">{title}</p>
      <p>{description}</p>
    </div>
  )
}
export default function HomeWhyUs() {
  return (
    <div
      className="bg-cover  bg-center  py-20 text-center lg:py-44"
      style={{
        backgroundImage: `linear-gradient(
            to bottom,
            rgba(10, 10, 10, 0.1),
            rgba(20, 20, 30, 0.0)
          ), url('/bg2.jpeg')`,
      }}
    >
      <div className="py-20s container px-8 ">
        <div className="lg:pb-10">
          <H2 title="Pourquoi nous choisir ?" className="" />
          <div className="lg:max-w-md lg:mx-auto lg:pt-8 font-light">
            <SubText title="Syg-Biotech avec plusieurs années d'experience dans le domaine de la recherche" />
          </div>
        </div>
        <div className="grid-cols-2 gap-y-14 gap-x-6 space-y-10 pt-6 lg:mx-auto lg:grid lg:max-w-4xl lg:space-y-0">
          <CardSection
            title="Échantillonnage Gratuit À Domicile"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi ullam,itaque iure magnam eveniet harum."
          />
          <CardSection
            title="Technologie Haut De Gamme"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi ullam,itaque iure magnam eveniet harum."
          />
          <CardSection
            title="500 + Tests Différents"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi ullam,itaque iure magnam eveniet harum."
          />
          <CardSection
            title="Patient Support"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi ullam,itaque iure magnam eveniet harum."
          />
        </div>
      </div>
    </div>
  )
}
