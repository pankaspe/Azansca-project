import type { NextPage } from 'next';

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

const PrivacyPolicy: NextPage = () => {
  return (
    <MainLayout>
      <Seo
        title="Privacy Policy"
        description="Privacy Policy"
        ogImage={websiteConfig.meta.ogImage}
      />
      <Hero 
         headline="Privacy Policy" 
         subHeadline="Leggi la nostra privacy policy" 
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

export default PrivacyPolicy
