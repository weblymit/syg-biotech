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
      className="bg-cover  bg-center  py-20 text-center"
      style={{
        backgroundImage: `linear-gradient(
            to bottom,
            rgba(10, 10, 10, 0.1),
            rgba(20, 20, 30, 0.0)
          ), url('/bg2.jpeg')`,
      }}
    >
      <div className="py-20s container px-8 ">
        <H2 title="Pourquoi nous choisir ?" className="text-gray-100d" />
        <SubText title="Syg-Biotech avec plusieurs années d'experience dans le domaine de la recherche" />
        <div className="space-y-10 pt-6">
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
