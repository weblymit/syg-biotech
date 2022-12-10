import Layout from '../components/Layout'
import HomeAbout from '../components/HomeAbout'
import HomeTech from '../components/HomeTech'
import HomeWhyUs from '../components/HomeWhyUs'
import EarlyAccess from '../components/HomeEarlyAccess'

export default function Home() {
  return (
    <Layout title="Bienvenue">
      <div className="" id="about">
        <HomeAbout />
      </div>
      <div className=" text-gray-100k bg-gray-100" id="technology">
        <HomeTech />
      </div>
      <div className="bg-fixed">
        <img
          src="/bg4.jpeg"
          alt="syg-biotech"
          className="object-cover lg:h-[60vh] lg:w-full"
        />
      </div>
      <div className="" id="advantage">
        <HomeWhyUs />
      </div>
      <div className="">
        <img
          src="/yan.jpeg"
          alt="syg-biotech Yannick Gangwe"
          className="h-[24vh] object-cover lg:h-[60vh] lg:w-full"
        />
      </div>
      <div className="bg-secondary" id="early-access">
        <EarlyAccess />
      </div>
    </Layout>
  )
}
