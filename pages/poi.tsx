import type { NextPage } from 'next';
import MainLayout from "../components/layouts/MainLayout";
import Seo from "../components/Seo";
import Hero from '../components/Hero';

import websiteConfig from '../lib/config/website';

const Poi: NextPage = () => {
  return (
    <MainLayout>
      <Seo
        title="Points of interest"
        description="Punti di interesse della Valle Anzasca"
        ogImage={websiteConfig.meta.ogImage}
      />
      <Hero 
         headline="P.O.I." 
         subHeadline="Punti di interesse della Valle Anzasca" 
      />
    </MainLayout>
  )
}

export default Poi
