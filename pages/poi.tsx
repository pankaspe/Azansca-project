import type { NextPage, GetStaticProps } from 'next';
import { useState } from 'react';

import {
  Box,
  Heading,
  Text,
  HStack,
  Tag,
  SpaceProps,
  Container,
  Button,
  Link,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

import MainLayout from "../components/layouts/MainLayout";
import Seo from "../components/Seo";
import Hero from '../components/Hero';
import dataPoi from "../content/poi/dataPoi";
import websiteConfig from '../lib/config/website';
import ChakraImage from '../lib/helper/chakraImage';

// @ getStaticProps call
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      poi: dataPoi,
    },
  };
}

// @ set IPoiTags interface
interface IPoiTags {
  tags: Array<string>;
  marginTop?: SpaceProps['marginTop'];
}

// @ PoiTags component
const PoiTags: React.FC<IPoiTags> = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="green" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

// @ set Props interface as plants object
interface Props {
  poi: {
    id: string,
    title: string,
    desc: string,
    url: string,
    hero: string,
    season: string,
    type: string,
    tags: string[],
  }[],
}

// @ main component react
const Poi: NextPage<Props> = ({ poi }) => {

  const [ postNum, setPostNum ] = useState(3);

  function handleClick() {
    setPostNum(prevPostNum => prevPostNum + 3)
  }
  
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

      {/* start main page content */}
      <Container maxW='container.xl'>
        
        {poi.slice(0, postNum).map((poi) => (

          <Box
            key={poi.id}
            display="flex"
            mb={14}
            flexDirection={{ base: 'column', md: 'row' }}
            justifyContent="space-between">
            <Box
              display="flex"
              flex="1"
              marginRight="3"
              position="relative"
              alignItems="center">
              
              {/* box image */}
              <Box
                width={{ base: '100%', sm: '85%' }}
                zIndex="2"
                marginLeft={{ base: '0', sm: '5%' }}
                marginTop="5%">
                  <ChakraImage
                    alt="Anzasca"
                    src={poi.hero}
                    width={700}
                    height={300}
                    quality={100}
                    placeholder="blur"
                    blurDataURL={poi.hero}
                  />
              </Box>

              {/* box background effect pattern */}
              <Box zIndex="1" width="100%" position="absolute" height="100%">
                <Box
                  bgGradient={'radial(yellow.600 1px, transparent 1px)'}
                  backgroundSize="20px 20px"
                  opacity="0.5"
                  height="100%"
                />
              </Box>

            </Box>

            {/* box meta */}
            <Box
              display="flex"
              flex="1"
              flexDirection="column"
              justifyContent="center"
              marginTop={{ base: '3', sm: '0' }}>
              <Heading pb={4} as='h1' size='lg'>
                  {poi.title}
              </Heading>
              <PoiTags tags={poi.tags} />
              <Text
                as="p"
                mt={8}
                fontSize="md"
              >
                {poi.desc}
              </Text>
              <Text
                as="p"
                mt={4}
                fontSize="lg"
                color="gray.500"
              >
                <ChevronRightIcon /> Categoria: {poi.type}
              </Text>
              <Text
                as="p"
                mt={4}
                fontSize="lg"
                color="gray.600"
              >
                <ChevronRightIcon /> Stagione: {poi.season}
              </Text>
              <Button as={Link} href={poi.url} mt={14} colorScheme='orange' variant='outline'>
                mostra dettagli
              </Button>
            </Box>

          </Box>
        ))}

        {/* load more button */}
        <Box 
          pt={4}
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
        >
          {
            postNum === poi.length 
            ? null
            : <Button onClick={handleClick}>mostra piu risultati</Button>
          }
          
        </Box>

      </Container>
    </MainLayout>
  )
}

export default Poi
