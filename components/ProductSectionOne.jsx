import React from 'react'

export default function ProductSectionOne() {
  return (
    <div className="container py-14 lg:py-24">
      <div className="text-center">
        <p className="pb-6 text-3xl font-black lg:pb-8 lg:text-5xl ">
          Détection des Biomarqueurs cibles
        </p>
        <div className="mx-auto pb-12 lg:max-w-3xl">
          <p className="lg:text-xl">
            Un outil essentiel pour la surveillance des marqueurs protéiques
            faiblement représentés dans les biopsies liquides. Cette technologie
            offre de nouvelles possibilités pour la recherche de nouveaux
            biomarqueurs protéiques cliniquement pertinents pour le diagnostic
            précoce de pathologies.
          </p>
        </div>
        <p className="lg:text-xl">
          Les biomarqueurs cibles sont détectées dans un processus en{' '}
          <span className="font-bold">trois étapes</span>
        </p>
      </div>
      <div className="pt-10">
        <img
          src="img-1.png"
          alt="syg biotech Yanick Gangwe"
          className="mx-auto  lg:max-w-2xl"
        />

        <div className="items-center justify-center pt-12 lg:flex">
          <img
            src="img-2.png"
            alt="syg biotech Yanick Gangwe"
            className="lg:max-w-2xl"
          />
        </div>
      </div>
    </div>
  )
}
