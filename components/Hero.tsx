import { Container, Heading, Text, Box, useColorModeValue } from '@chakra-ui/react';
import { useRouter } from 'next/router';



interface Hero {
   headline: string,
   subHeadline: string,
}

const Hero: React.FC<Hero> = ({ headline, subHeadline }) => {

   const path = useRouter().pathname;

   return (
      <Container
         py={12}
         maxW='container.lg' 
         centerContent
      >
         <Heading 
            as="h1" 
            size={path === "/" ? "4xl" : "2xl"}
            fontWeight={600} 
            pb={6} 
            color={useColorModeValue('gray.600', 'gray.200')}
            letterSpacing={4}
            textAlign="center"
         >
            <Text 
               borderBottom="solid" 
               borderColor={useColorModeValue('green.500', 'green.600')}
            >
               { headline }
            </Text>
         </Heading>
         <Text 
            as="h2" 
            fontWeight={200} 
            textAlign="center" 
            color={useColorModeValue('gray.500', 'gray.100')}
         >
            { subHeadline }
         </Text>
      </Container>
   )
}

export default Hero