import { ReactNode } from 'react';

import { 
   Container, 
   Box, 
   Stack, 
   Link, 
   SimpleGrid, 
   Text, 
   useColorModeValue 
} from '@chakra-ui/react';

const ListHeader = ({ children }: { children: ReactNode }) => {
   return (
     <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
       {children}
     </Text>
   );
 };

 
const Footer: React.FC = () => {
   return(
      <Box
         mt={16}
         bg={useColorModeValue('gray.100', 'gray.800')}
         color={useColorModeValue('gray.700', 'gray.200')}
      >
         <Container as={Stack} maxW={'container.xl'} py={10}>
            <SimpleGrid columns={{ base: 1, sm: 3, md: 3 }} spacing={8}>
               <Stack align={'flex-start'}>
                  <ListHeader>Il progetto</ListHeader>
                  <Link href={'#'}>Come nasce</Link>
                  <Link href={'#'}>Collabora</Link>
                  <Link href={'#'}>Contattaci</Link>
                  <Link href={'#'}>Bug tracker</Link>
               </Stack>

               <Stack align={'flex-start'}>
                  <ListHeader>Risorse</ListHeader>
                  <Link href={'https://vercel.com'}>Vercel</Link>
                  <Link href={'https://www.vecteezy.com'}>Vecteezy</Link>
                  <Link href={'https://github.com/pankaspe'}>Github</Link>
               </Stack>

               <Stack align={'flex-start'}>
                  <ListHeader>Tecnologie usate</ListHeader>
                  <Link href={'https://it.reactjs.org'}>React</Link>
                  <Link href={'https://chakra-ui.com'}>Chakra UI</Link>
                  <Link href={'https://www.typescriptlang.org'}>Typescript</Link>
               </Stack>

            </SimpleGrid>
         </Container>

         <Box
            borderTopWidth={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
         >
            <Container
               as={Stack}
               maxW={'container.xl'}
               py={4}
               direction={{ base: 'column', md: 'row' }}
               spacing={4}
               justify={{ md: 'space-between' }}
               align={{ md: 'center' }}>
               <Text>© 2022 Anzasca.it. All rights reserved</Text>
            </Container>
         </Box>
      </Box>
   )
}

export default Footer