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
      <div className=" bg-[#e7e7e7] text-gray-100k">
        <HomeServices />
      </div>
      <div className="">
        <img src="/bg4.jpeg" alt="syg-biotech" className='object-cover' />
      </div>
      <div className="">
        <HomeWhyUs />
      </div>
      <div className="bg-secondary">
        <HomeProduct />
      </div>
    </Layout>
  )
}
