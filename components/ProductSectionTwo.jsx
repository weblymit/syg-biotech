import React from 'react'

export default function ProductSectionTwo() {
  return (
    <div className="bg-gray-100">
      <div className="container py-14 lg:py-24">
        <div className="mx-auto max-w-4xl text-center ">
          <p className="pb-6 text-2xl font-black lg:text-4xl">
            Méthode pour déterminer rapidement les interactions ligand-récepteur
          </p>
          <p className="lg:text-xl">
            La technologie de SYG Biotech peut également être utilisée pour
            détecter des potentiels candidats médicament ou la sensibilité aux
            inhibiteurs en ajoutant des peptides, anticorps ou petites molécules
            (Darpins, Affibody etc.) directement aux récepteurs activés ou
            inactivés par le biomarqueur cible.
          </p>
        </div>
        <div className=" pt-10 lg:pt-16">
          <img
            src="img-3.png"
            alt="syg biotech Yanick Gangwe"
            className="mx-auto lg:max-w-3xl"
          />
        </div>
      </div>
    </div>
  )
}
