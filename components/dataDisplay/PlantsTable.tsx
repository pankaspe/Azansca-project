import { useState } from 'react'
import ChakraImage from '../../lib/helper/chakraImage'
import NextLink from "next/link"

import { 
   Box,
   Input,
   Link,
   Text,
   Badge,
   TableContainer, 
   Table, 
   Thead, 
   Tbody, 
   Tfoot, 
   Tr, Th, Td,
   useColorModeValue
} from '@chakra-ui/react'

import {
   createColumnHelper,
   getCoreRowModel,
   useReactTable,
   getFilteredRowModel,
   getPaginationRowModel,
   flexRender,
} from '@tanstack/react-table'

// @ helper convert title -> slug
const convertToSlug = (Text: string) => {
   return Text
       .toLowerCase()
       .replace(/ /g,'-')
       .replace(/[^\w-]+/g,'');
 }; 

// @ set interface
interface Plant {
   title: string,
   summary: string,
   hero: string,
   toxic: string,
   protected: string,
   id: string,
}

// set column helper
const columnHelper = createColumnHelper<Plant>()

// set value of columns
const columns = [
   columnHelper.accessor('hero', {
     header: () => 'Avatar',
     footer: () => 'Avatar',
     cell: info => (          
      <ChakraImage
         alt='avatar'
         src={info.getValue()}
         width={38}
         height={38}
         quality={50}
         borderRadius='full'
      />
     ),
   }),
   columnHelper.accessor('title', {
      header: () => 'Nome',
      footer: () => 'Nome',
      cell: props => (
         <NextLink href={`/plants/${convertToSlug(props.getValue())}`} passHref>
            <Link color={useColorModeValue('green.800', 'green.100')}>
               {props.getValue()}
            </Link>
         </NextLink>
      ),
    }),
    columnHelper.accessor('summary', {
      header: () => 'Descrizione',
      footer: () => 'Descrizione',
      cell: props => (
         <Text noOfLines={1} style={{ whiteSpace: 'normal' }}>
            {props.getValue()}
         </Text>
         ),
    }),
    columnHelper.accessor('toxic', {
      header: () => 'Tossica',
      footer: () => 'Tossica',
      cell: props => props.getValue() 
         ? <Badge variant='outline' colorScheme='red'>si</Badge> 
         : <Badge variant='outline' colorScheme='green'>no</Badge>,
    }),
    columnHelper.accessor('protected', {
      header: () => 'Protetta',
      footer: () => 'Protetta',
      cell: props => props.getValue() 
         ? <Badge variant='outline' colorScheme='red'>si</Badge> 
         : <Badge variant='outline' colorScheme='green'>no</Badge>,
    }),
 ]

interface Props {
   trueData: any
}


// create main component
const PlantsTable: React.FC<Props> = ({ trueData }) => {

   const [data] = useState(() => [...trueData])
   const [globalFilter, setGlobalFilter] = useState('')

   const table = useReactTable({
      data,
      columns,
      state: {
         globalFilter,
       },
      getCoreRowModel: getCoreRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      debugTable: true,
   })

   return(
      <TableContainer >
         <Box pb={14}>
            <Input
               variant='flushed'
               value={globalFilter ?? ''}
               onChange={e => setGlobalFilter(e.target.value)}
               placeholder="Cerca il nome di una pianta..."
            />
         </Box>
         <Table variant='striped' size='sm'>
            <Thead>
               {table.getHeaderGroups().map(headerGroup => (
                  <Tr key={headerGroup.id}>
                  {headerGroup.headers.map(header => (
                     <Th key={header.id}>
                        {header.isPlaceholder
                        ? null
                        : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                           )}
                     </Th>
                  ))}
                  </Tr>
               ))}
            </Thead>
            <Tbody>
               {table.getRowModel().rows.map(row => (
                  <Tr key={row.id}>
                  {row.getVisibleCells().map(cell => (
                     <Td key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                     </Td>
                  ))}
                  </Tr>
               ))}
            </Tbody>
            <Tfoot>
               {table.getFooterGroups().map(footerGroup => (
                  <Tr key={footerGroup.id}>
                  {footerGroup.headers.map(header => (
                     <Th key={header.id}>
                        {header.isPlaceholder
                        ? null
                        : flexRender(
                              header.column.columnDef.footer,
                              header.getContext()
                           )}
                     </Th>
                  ))}
                  </Tr>
               ))}
            </Tfoot>
         </Table>
      </TableContainer>
   )
}

export default PlantsTable