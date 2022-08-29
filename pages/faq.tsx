import type { NextPage } from 'next'
import {
  Container,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import MainLayout from "../components/layouts/MainLayout";
import Seo from "../components/Seo";
import Hero from '../components/Hero';

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
      <Container maxW='container.xl'>
        <Alert status='warning' variant='subtle'>
          <AlertIcon />
          <AlertTitle>Ci spiace!</AlertTitle>
          <AlertDescription>Ma questa pagina è in fase di costruzione</AlertDescription>
        </Alert>
      </Container>
    </MainLayout>
  )
}

export default Faq
