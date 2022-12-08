import Link from 'next/link'
import React from 'react'
import LayoutTwo from '../components/LayoutTwo'

export default function EarlyAccess() {
  return (
    <LayoutTwo headerTitle="Early Access">
      <div className="container mx-auto max-w-5xl py-10 lg:py-24">
        <p className="text-centerj pt-4 text-2xl font-black leading-normal lg:text-4xl lg:leading-snug">
          Rejoignez notre équipe de partenaires et collaborateurs
        </p>
        <div className="mx-auto pt-8 text-lg">
          <p className="pb-5">
            Nous pensons que de solides collaborations externes sont un élément
            essentiel pour réaliser le plein potentiel de notre technologie.
            Nous visons à établir des partenariats de développement stratégiques
          </p>
          <p className="pb-5">
            Nous proposons des solutions personnalisées aux partenaires tel que
            les sociétés biopharmaceutiques, les instituts de recherche etles
            prestataires de services impliqués dans le développement de
            médicaments et la recherche clinique. Ces partenaires auront accès à
            la technologie avant notre lancement officiel et bénéficieront des
            avantages de son utilité avant le marché.
          </p>
          <p>
            Si vous souhaitez avoir accès à cette technologie passionnante en
            tant que client à accès anticipé, veuillez nous contacter.
          </p>
          <div className="pt-6">
            <Link href="contact">
              <a className=" rounded-lg bg-secondary p-2 uppercase text-gray-50 hover:bg-yellow-500">
                Prendre contact
              </a>
            </Link>
          </div>
        </div>
      </div>
    </LayoutTwo>
  )
}
