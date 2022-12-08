import React from 'react'
import { H2, SubText } from './H2'
import MoreAbout from './MoreAbout'

export default function HomeTech() {
  return (
    <div className="container py-16 lg:px-8 lg:py-28">
      <div className="lg:pb-16">
        <H2 title="SYG BIOTECH TECHNOLOGY" className="" />
        <SubText title="Méthode pour déterminer rapidement les interactions ligand-récepteur" />
      </div>
      <div className="mx-auto space-y-8 lg:mt-5 lg:grid lg:max-w-5xl lg:grid-cols-2 lg:gap-8 lg:space-y-0">
        <div className="lg:text-xl">
          <p className="py-5">
            La technologie développée par SYG Biotech est basée sur des
            probiotiques avec des récepteurs hybrides conçues sur mesure, de
            sorte qu’une liaison spécifique d’un biomarqueur protéique à la
            surface des μcellules conduit à la modification du signal
            quantifiable.
          </p>
          <p>
            La technologie nécessite une préparation minimale et fournit des
            résultats en heures (3h) au lieu de jours par rapport aux autres
            méthodes d’identification.
          </p>
        </div>
        <img src="syg-tech.png" alt="" />
      </div>
      <MoreAbout href="notre-produit" color="text-secondary" />
    </div>
  )
}
