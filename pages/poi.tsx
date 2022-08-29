import type { NextPage, GetStaticProps } from 'next';
import MainLayout from "../components/layouts/MainLayout";
import Seo from "../components/Seo";
import Hero from '../components/Hero';
import dataPoi from "../content/poi/dataPoi"

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

import websiteConfig from '../lib/config/website';
import ChakraImage from '../lib/helper/chakraImage';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      poi: dataPoi,
    },
  };
}

// @ set Props interface as plants object
interface Props {
  poi: {
     title: string,
     desc: string,
     url: string,
     hero: string,
     type: string,
     tags: string[],
  }[],
}

interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps['marginTop'];
}

const BlogTags: React.FC<IBlogTags> = (props) => {
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

const Poi: NextPage<Props> = ({ poi }) => {
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
        {poi.map((poi) => (
          <Box
            key={poi.title}
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

              <Box zIndex="1" width="100%" position="absolute" height="100%">
                <Box
                  bgGradient={'radial(yellow.600 1px, transparent 1px)'}
                  backgroundSize="20px 20px"
                  opacity="0.5"
                  height="100%"
                />
              </Box>

            </Box>
            <Box
              display="flex"
              flex="1"
              flexDirection="column"
              justifyContent="center"
              marginTop={{ base: '3', sm: '0' }}>
              <Heading pb={4} as='h1' size='lg'>
                  {poi.title}
              </Heading>
              <BlogTags tags={poi.tags} />
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
                color="gray"
              >
                <ChevronRightIcon /> Categoria: {poi.type}
              </Text>
              <Button as={Link} href={poi.url} mt={14} colorScheme='orange' variant='outline'>
                mostra dettagli
              </Button>
            </Box>
          </Box>
        ))}
      </Container>
    </MainLayout>
  )
}

export default Poi
