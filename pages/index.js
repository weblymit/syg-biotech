import Layout from '../components/Layout'
import HomeAbout from '../components/HomeAbout'
import HomeServices from '../components/HomeServices'
import HomeWhyUs from '../components/HomeWhyUs'
import HomeProduct from '../components/HomeProduct'

export default function Home() {
  return (
    <Layout title="Bienvenue">
      <div className="">
        <HomeAbout />
      </div>
      <div className=" text-gray-100k bg-[#e7e7e7]">
        <HomeServices />
      </div>
      <div className="">
        <img
          src="/bg4.jpeg"
          alt="syg-biotech"
          className="object-cover lg:h-[80vh] lg:w-full"
        />
      </div>
      <div className="">
        <HomeWhyUs />
      </div>
      <div className="">
        <img
          src="/yan.jpeg"
          alt="syg-biotech Yannick Gangwe"
          className="h-[24vh] object-cover lg:h-[60vh] lg:w-full"
        />
      </div>
      <div className="bg-secondary">
        <HomeProduct />
      </div>
    </Layout>
  )
}
