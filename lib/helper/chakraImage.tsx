import { chakra } from "@chakra-ui/react"
import Image from 'next/image'

// @ helper integrate chakra UI image with nextjs
const ChakraImage = chakra(Image, {
   shouldForwardProp: (prop) => 
   [
      "width",
      "height",
      "layout",
      "src",
      "alt",
      "quality",
      "placeholder",
      "blurDataURL",
   ].includes(prop),
});

export default ChakraImage
