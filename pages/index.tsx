import type { NextPage } from 'next'
import Image from 'next/image'
import { Container, Text } from '@chakra-ui/react'

/* import custom components */
import MainLayout from "../components/layouts/MainLayout"
import Seo from "../components/Seo"
import Hero from '../components/Hero'

/* import website configuration */
import websiteConfig from '../lib/config/website'

// @ main component react
const Home: NextPage = ( ) => {
  return (
    <MainLayout>
      <Seo
        description={websiteConfig.meta.subTitle}
      />
      <Hero 
        headline={websiteConfig.meta.title} 
        subHeadline={websiteConfig.meta.subTitle} 
      />
      <Container maxW='container.xl'>
        <h3><Text>la home page, pagina principale del sito</Text></h3>
      </Container>
    </MainLayout>
  )
}

export default Home
