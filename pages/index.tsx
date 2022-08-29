import type { NextPage, GetStaticProps } from 'next'
import NextLink from "next/link"
import { Container } from '@chakra-ui/react'

/* import custom components */
import MainLayout from "../components/layouts/MainLayout"
import Seo from "../components/Seo"
import Hero from '../components/Hero'
import PlantsTable from '../components/dataDisplay/PlantsTable'

/* import website configuration */
import websiteConfig from '../lib/config/website'

// import function for call plants data
import { getSortedPlantsData } from '../lib/model/plants'

import ChakraImage from '../lib/helper/chakraImage'
import landscape from '../public/landscape.png'

// @ getStaticProps call
export const getStaticProps: GetStaticProps = async () => {
  const data = getSortedPlantsData();
  const plants = JSON.parse(JSON.stringify(data))

  return {
    props: {
      plants,
    },
  };
}

// @ set Props interface as plants object
interface Props {
  plants: {
     title: string,
     summary: string,
     hero: string,
     toxic: boolean,
     protected: boolean,
     id: string
  }[],
}

// @ main component react
const Home: NextPage<Props> = ( {plants} ) => {
  return (
    <MainLayout>
      <Seo
        title={websiteConfig.meta.title}
        description={websiteConfig.meta.subTitle}
        ogImage={websiteConfig.meta.ogImage}
      />

      <Container 
        maxW='container.xl'
        centerContent
        pt={14}
      >
        <ChakraImage
          alt="Anzasca"
          src={landscape}
          width={600}
          height={230}
          quality={100}
          placeholder="blur"
        />
      </Container>
      
      <Hero 
        headline={websiteConfig.meta.title} 
        subHeadline={websiteConfig.meta.subTitle} 
      />

      {/* start main page content */}
      <Container maxW='container.xl'>
        <PlantsTable trueData={plants} />
      </Container>
    </MainLayout>
  )
}

export default Home
