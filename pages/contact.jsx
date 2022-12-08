import Link from 'next/link'
import React from 'react'
import {
  IoLocationOutline,
  IoMailOpenOutline,
  IoPhonePortraitOutline,
} from 'react-icons/io5'
import LayoutTwo from '../components/LayoutTwo'

export default function Contact() {
  return (
    <LayoutTwo headerTitle="Contact">
      <div className="container mx-auto max-w-5xl py-24">
        <div className="mx-auto flex max-w-xl flex-col items-center justify-center bg-[#d4fff4] py-14 shadow-sm">
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2">
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
      </div>
    </LayoutTwo>
  )
}
