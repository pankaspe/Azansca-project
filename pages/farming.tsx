import type { NextPage } from 'next'
import Image from 'next/image'
import MainLayout from "../components/layouts/MainLayout";
import Seo from "../components/Seo";
import Hero from '../components/Hero'

const Farming: NextPage = () => {
  return (
    <MainLayout>
      <Seo
        title="Agricoltura locale"
        description="cprodotti della Valle Anzasca"
      />
      <Hero 
         headline="Agricoltura" 
         subHeadline="Produttori locali" 
      />
    </MainLayout>
  )
}

export default Farming
