import React from 'react'
import { H2, SubText } from '../components/H2'
import CardService from '../components/CardService'

export default function HomeServices() {
  return (
    <div className="container px-8 py-20  ">
      <H2 title="Services" className="text-gray-100d" />
      <SubText title="Syg-Biotech vous fournit différents types de service" />
      <div className="space-y-8 mt-5">
        <CardService
          title="Microscopie avancée"
          text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sint,
        eaque ratione repudiandae qui sequi delectus tempore consequuntur sunt."
        />
        <CardService
          title="Biologie Moléculaire"
          text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sint,
        eaque ratione repudiandae qui sequi delectus tempore consequuntur sunt."
        />
        <CardService
          title="Recherche Chimique"
          text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sint,
        eaque ratione repudiandae qui sequi delectus tempore consequuntur sunt."
        />
        <CardService
          title="Test De Diabète"
          text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sint,
        eaque ratione repudiandae qui sequi delectus tempore consequuntur sunt."
        />
      </div>
    </div>
  )
}
