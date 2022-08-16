import type { NextPage } from 'next'
import Image from 'next/image'
import MainLayout from "../components/layouts/MainLayout";
import Seo from "../components/Seo";
import Hero from '../components/Hero'

import websiteConfig from '../lib/config/website'

const Faq: NextPage = () => {
  return (
    <MainLayout>
      <Seo
        title="F.A.Q."
        description="frequently asked question"
        ogImage={websiteConfig.meta.ogImage}
      />
      <Hero 
         headline="F.A.Q." 
         subHeadline="frequently asked question" 
      />
    </MainLayout>
  )
}

export default Faq
