import type { NextPage } from 'next'
import ChakraImage from '../lib/helper/chakraImage'
import MainLayout from "../components/layouts/MainLayout";
import Seo from "../components/Seo";
import Hero from '../components/Hero'

import { 
   Container, 
   Box,
   Text,
   Heading,
   Alert,
   AlertIcon,
   AlertDescription,
   SimpleGrid
} from '@chakra-ui/react'

import zaffy from '../public/zafferano/crocus-fiore.jpeg'
import stimmi from '../public/zafferano/crocus-stimmi.jpeg'
import vasetti from '../public/zafferano/crocus-vasetti.jpg'
import liquore from '../public/zafferano/crocus-liquore.jpg'
import cioccolata from '../public/zafferano/crocus-cioccolata.jpg'

import websiteConfig from '../lib/config/website'

const Crocus: NextPage = () => {
  return (
    <MainLayout>
      <Seo
        title="Zafferano alpino"
        description="lo Zafferano della Valle Anzasca"
        ogImage={websiteConfig.meta.ogImage}
      />
      <Hero 
         headline="Zafferano alpino" 
         subHeadline="L'oro giallo della Valle Anzasca" 
      />

      <Container maxW='container.xl'>
         {/* first intro box */}
         <Box 
            display="flex"
            flexDirection={{ base: 'column', md: 'row' }}
         >
            <Box>
               <ChakraImage
                  borderRadius='md'
                  layout="intrinsic"
                  src={zaffy}
                  alt='Zafferano del Monte Rosa'
                  quality={100}
                  placeholder="blur"
               />
            </Box>
            <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
               <Text
                  fontWeight='bold'
                  textTransform='uppercase'
                  fontSize='sm'
                  letterSpacing='wide'
                  color='green.400'
               >
                  Nato a quota 1.230 m s.l.m. il Crocus alpino
               </Text>
               <Text mt={2}>
                  Grazie alla passione di due persone e alla fusione delle loro idee, nasce a Borca, nel comune di Macugnaga, il campo di Zafferano alpino, a quota 1216 metri di altitudine. 
                  Il colore rosso intenso e le sfumature arancioni compongono la cromia degli stimmi del fiore e il loro sapore denso e corposo 
                  si accompagna egregiamente a risotti, torte salate e dolci, cioccolato e per dissetarci, anche a liquori e sciroppi!
               </Text>
               <Alert status='info' mt={6}>
                  <AlertIcon />
                  <AlertDescription fontSize='sm' letterSpacing='wide'>
                     <strong>Il report di analisi qualitativa prodotto dall'associazione Val.Te.Mo:</strong>
                     prima qualità Aroma: A 330nm; Potere amaricante: A 257nm; Colorante: A 440nm;
                  </AlertDescription>
               </Alert>
            </Box>
         </Box>

         {/* second intro box */}
         <Box 
            pt={10}
            display="flex"
            flexDirection={{ base: 'column', md: 'row' }}
         >
            <Box mt={{ base: 4, md: 0 }} mr={{ md: 6 }}>
               <Text
                  fontWeight='bold'
                  textTransform='uppercase'
                  fontSize='sm'
                  letterSpacing='wide'
                  color='green.400'
               >
                  Preparazione e utilizzo
               </Text>
               <Text mt={2}>
                  Per preparare lo Zafferano in stimmi, scaldare dell'acqua senza raggiungere il bollore, versarla in un vasetto o bicchiere e immergere al suo interno gli stimmi (circa 7 pezzi per persona). 
                  Il nostro consiglio è di lasciarlo a bagno maria per circa un'ora, passata la quale l'acqua avrà preso un colorito giallo intenso tendente all'arancione, pronta per essere utilizzata nella pietanza prima di essere servita! 
                  Se ne sconsiglia la cottura per evitare di disperdere le proprietà della spezia.
               </Text>
               <Alert status='info' mt={6} mb={{ base: 4, md: 0}}>
                  <AlertIcon />
                  <AlertDescription fontSize='sm' letterSpacing='wide'>
                     <strong>Lo sapevi che... </strong>
                     per ottenere chilogrammo di spezia occorrono circa 120.000 fiori (360.000 stimmi).
                  </AlertDescription>
               </Alert>
            </Box>
            <Box>
               <ChakraImage
                  borderRadius='md'
                  layout="intrinsic"
                  src={stimmi}
                  alt='Zafferano del Monte Rosa'
                  quality={100}
                  placeholder="blur"
               />
            </Box>
         </Box>     

         {/* third box */}   
         <Text
            pt={8}
            pb={4}
            fontWeight='bold'
            textTransform='uppercase'
            fontSize='sm'
            letterSpacing='wide'
            color='green.400'
         >
            Prodotti
         </Text> 
         <SimpleGrid columns={[1, null, 3]} spacing={10}>
            <Box>
               <ChakraImage
                  borderRadius='md'
                  width={720}
                  height={500}
                  src={vasetti}
                  alt='Zafferano del Monte Rosa'
                  quality={100}
                  placeholder="blur"
               />
               <Heading size="md" py={2}>
                  Zafferano puro in stimmi
               </Heading>
               <Text>
                  raccolto e diviso a mano con essicatura controllata 40 °C
               </Text>
            </Box>
            <Box>
               <ChakraImage
                  borderRadius='md'
                  width={720}
                  height={500}
                  src={liquore}
                  alt='Zafferano del Monte Rosa'
                  quality={100}
                  placeholder="blur"
               />
               <Heading size="md" py={2}>
                  Liquore allo zafferano
               </Heading>
               <Text>
                  ingredienti: acqua, alcool etilico puro 96%, zucchero, stimmi di zafferano, limone bio.
               </Text>
            </Box>
            <Box>
               <ChakraImage
                  borderRadius='md'
                  width={720}
                  height={500}
                  src={cioccolata}
                  alt='Zafferano del Monte Rosa'
                  quality={100}
                  placeholder="blur"
               />
               <Heading size="md" py={2}>
                  Cioccolata fondente allo Zafferano
               </Heading>
               <Text>
                  raccolto e lavorato interamente a mano, con: burro di cacao, cacao amaro crudo, zucchero di cocco e zafferano di Macugnaga.
               </Text>
            </Box>
         </SimpleGrid>
      </Container>
    </MainLayout>
  )
}

export default Crocus
