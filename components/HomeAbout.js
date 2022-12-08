import React from 'react'
import { H2 } from '../components/H2'

export default function HomeAbout() {
  return (
    <div className="text-centerd container py-16 lg:py-28 ">
      <p className=""></p>
      <H2 title="Un mot sur nous" />
      <div className="font-light lg:mx-auto lg:max-w-4xl lg:pt-5 lg:text-xl">
        <p className="pb-3">
          SYG-BIOTECH est une jeune entreprise innovante qui se spécialise dans
          le développement et la commercialisation de sa technologie brevetée
          pour la détection des biomarqueur et pour la découverte de traitements
          hautement spécifiques contre le cancer et les maladies auto-immunes.
          Bien que cette entreprise soit jeune, elle n’en est pas moins
          dynamique et riche d’une envie de révolutionner les dispositifs de
          suivi des cancers.
        </p>
        <p>
          En effet, à partir d’une expérience unique acquise par son fondateur,
          ayant conduit notamment en 2018 à la publication d’un brevet sur un
          kit de détection de biomarqueur protéique, SYG-BIOTECH vise à faire
          bouger de nouveaux les lignes en développant une technologie innovante
          de détection des composés qui ont le potentiel de cibler les points de
          contrôle immunitaires. Cette technologie permettrait de combler les
          lacunes des technologies déjà existantes et ainsi supporter le suivi
          de biomarqueur protéique de différente pathologie. Ainsi, le
          développement d’une telle technologie contribuerait grandement à la
          détection des maladies, au développement d’une approche de médecine
          personnalisée en orientant le traitement en fonction des patients et
          enfin à la découverte de nouveaux candidats médicaments.
        </p>
      </div>
    </div>
  )
}
