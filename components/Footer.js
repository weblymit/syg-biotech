import Link from 'next/link'
import {
  IoLocationOutline,
  IoMailOpenOutline,
  IoPhoneLandscapeOutline,
  IoPhonePortraitOutline,
} from 'react-icons/io5'
import FooterSocialMediaIcon from './FooterSocialMediaIcon'

const Footer = () => {
  return (
    <div className="relative mt-16 bg-secondary text-gray-100">
      <svg
        className="sm:h-16s absolute top-0 -mt-5 h-6 w-full text-secondary sm:-mt-10 lg:-mt-5"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="currentColor"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>
      <div className="mx-auto px-4 pt-12 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
        <div className="flex flex-col items-center justify-center py-10">
          <div className="md:max-w-md ">
            <Link href="/">
              <a className="pointer text-3xl font-black ">Syg-Biotech</a>
            </Link>
          </div>
          <div className="space-y-4 pt-6 text-gray-300">
            <p className="pb-1 text-center text-lg font-bold uppercase underline underline-offset-8">
              Information
            </p>
            <div className=" flex items-center justify-center space-x-2">
              <IoPhonePortraitOutline className="text-2xl" />
              <p>(+33) 2 76 27 11 11</p>
            </div>
            <div className=" flex items-center justify-center space-x-2">
              <IoMailOpenOutline className="text-2xl" />
              <p>info@sygbiotech.com</p>
            </div>
            <div className="text-center">
              <div className=" flex items-center justify-center space-x-2">
                <IoLocationOutline className="text-2xl" />
                <p>25 Passage de la Lucine</p>
              </div>
              <p>76007 Rouen (France)</p>
            </div>
          </div>
        </div>
        <div className="border-deep-purple-accent-200 flex flex-col justify-betweens text-yellow-100 items-center justify-center border-t pt-5 pb-10 sm:flex-row">
          <FooterSocialMediaIcon />
        </div>
      </div>
    </div>
  )
}

export default Footer
