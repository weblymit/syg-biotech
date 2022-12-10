import React from 'react'
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5'
import { H2, SubText } from './H2'

export default function HomeWhyUs() {
  return (
    <div
      className="bg-cover  bg-center py-20 lg:py-28"
      style={{
        backgroundImage: `linear-gradient(
            to bottom,
            rgba(10, 10, 10, 0.1),
            rgba(20, 20, 30, 0.0)
          ), url('/bg2.jpeg')`,
      }}
    >
      <div className="containerl lg:px-8 ">
        <div className="container lg:pb-10">
          <H2 title="Pourquoi nous choisir ?" className="" />
        </div>
        <div className="items-centers container justify-center lg:mx-auto lg:flex">
          <div className="lg:max-w-3xl lg:text-lg">
            <p>
              La plupart des méthodes d’évaluation de l’interaction d’un ligand
              particulier avec son récepteur spécifique sont coûteuses, prennent
              beaucoup de temps, exigent beaucoup de main- d’œuvre et
              nécessitent un équipement et une expertise spécifiques. Ces
              technologies sont souvent exigeantes en main-d’œuvre, coûteuse et
              nécessite un équipement de laboratoire spécial.
            </p>
            <div className="mx-auto pt-10 lg:max-w-xl lg:py-10">
              <img src="img-4.png" alt="syg biotech Yannick Gangwe" />
            </div>
            <p>
              Les principaux avantages sont la configuration rapide, la
              préparation facile des réactifs et la manipulation familière. Le
              protocole direct est très flexible et peut être adapté pour
              mesurer de nombreuses interactions protéine-protéine.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
