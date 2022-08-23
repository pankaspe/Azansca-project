import type { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { Container, Box } from '@chakra-ui/react'

/* import custom components */
import MainLayout from "../../components/layouts/MainLayout"
import Seo from "../../components/Seo"
import Hero from '../../components/Hero'

import { getAllPlantIds, getPlantData } from '../../lib/model/plants'
import ChakraImage from '../../lib/helper/chakraImage'

interface Props {
   plantData: {
      title: string,
      summary: string,
      hero: string,
      toxic: string,
      protected: string,
      contentHtml: string,
   }
}

const Plant: NextPage<Props> = ({ plantData }) => {
   return(
    <MainLayout>
      <Seo
        title={plantData.title}
        description={plantData.summary}
        ogImage={plantData.hero}
      />
      <Hero 
        headline={plantData.title}
        subHeadline={plantData.summary}
      />
      <Container maxW='container.xl'>
        <Box style={{ position: 'relative', height: '400px' }}>
          <ChakraImage
            alt={plantData.title}
            src={plantData.hero}
            layout="fill"
            objectFit="cover"
            quality={100}
            placeholder="blur"
            blurDataURL={plantData.hero}
          />
        </Box>
        <div dangerouslySetInnerHTML={{ __html: plantData.contentHtml }} />
      </Container>
    </MainLayout>
   )
}

export const getStaticPaths: GetStaticPaths = async () => {
   const paths = getAllPlantIds()
   return {
     paths,
     fallback: false
   }
 }
 
 export const getStaticProps: GetStaticProps = async ({ params }) => {
   const data = await getPlantData(params?.id as string)
   const plantData = JSON.parse(JSON.stringify(data))

   return {
     props: {
       plantData
     }
   }
 }

export default Plant