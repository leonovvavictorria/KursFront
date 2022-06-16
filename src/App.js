import logo from './logo.svg'
import './App.css'
import React from 'react'
import {
  Text,
  Container,
  Stack,
  Box,
  Heading,
  Divider,
  Image,
  Center,
  Flex,
  IconButton,
} from '@chakra-ui/react'
import { SearchIcon, HamburgerIcon } from '@chakra-ui/icons'
import './styles.css'
import img from './balet.jpg'

function App() {
  return (
    <Container bg='pink.200' maxW='700px'>
      <Flex justifyContent='space-between'>
        <IconButton
          colorScheme='pink.200'
          aria-label='Search database'
          icon={<SearchIcon color='black' boxSize={10} paddingBottom='10px' />}
          _hover={{ bg: 'pink.100', cursor: 'pointer' }}
        />
        <IconButton
          colorScheme='pink.200'
          aria-label='Search database'
          icon={
            <HamburgerIcon
              color='black'
              boxSize={10}
              paddingBottom='10px'
              _hover={{ bg: 'pink.100', cursor: 'pointer' }}
            />
          }
        />
      </Flex>
      <Box>
        <Stack spacing={3}>
          <Heading size='3xl' fontFamily='Josefin Sans'>
            QUENEDIT
          </Heading>
          <Heading size='3xl' fontFamily='Josefin Sans'>
            BALLET
          </Heading>
          <Heading size='3xl' paddingBottom='10' fontFamily='Josefin Sans'>
            SCHOOL
          </Heading>
        </Stack>
        <Stack spacing={3}>
          <Heading size='1xl' color='blackAlpha.500' fontFamily='Josefin Sans'>
            Home of Quebedit Dance Theatre
          </Heading>
        </Stack>
      </Box>
      <Divider
        // orientation='horizontal'
        borderColor='blackAlpha.500'
        bg='blackAlpha.300'
        borderWidth='2px'
        borderRadius='full'
      />
      <Box>
        <Stack spacing={3}>
          <Heading size='2xl' paddingTop='80px' fontFamily='Josefin Sans'>
            NOW REGISTERING FOR
          </Heading>
          <Heading size='2xl' paddingBottom='10' fontFamily='Josefin Sans'>
            2020 SUMMER INTENSIVE
          </Heading>
        </Stack>
      </Box>
      <Flex direction='column'>
        <Center>
          <Image src={img} alt='Balerina' />
        </Center>
        <Flex justifyContent='space-between' px='0.5em'>
          <Text
            fontSize='xl'
            color='blackAlpha.500'
            fontFamily='Josefin Sans'
            paddingTop='10px'
          >
            Ballerinas
          </Text>
          <Text
            fontSize='xl'
            color='blackAlpha.500'
            fontFamily='Josefin Sans'
            paddingTop='10px'
          >
            January 14 , 2022
          </Text>
        </Flex>
      </Flex>
      <Flex>
        <Box>
          <Stack
            spacing={3}
            _hover={{ bg: 'pink.100', cursor: 'pointer' }}
            transition='all 0.5s'
            p='1'
            maxW='350px'
          >
            <Heading size='xl' paddingTop='80px' fontFamily='Josefin Sans'>
              Sumer
            </Heading>
            <Heading size='xl' fontFamily='Josefin Sans'>
              Intensive 2022
            </Heading>
            <Text
              fontSize='xs'
              color='blackAlpha.500'
              fontFamily='Josefin Sans'
            >
              July 15 - July 24, 2022
            </Text>
            <Text
              fontSize='xl'
              color='blackAlpha.500'
              fontFamily='Josefin Sans'
              paddingTop='10px'
              maxW='350px'
            >
              Come and join us for 2020 Summer Intensive progran in classical
              ballet with a comprehensive curriculum
            </Text>
          </Stack>
        </Box>
        <Box>
          <Stack
            _hover={{ bg: 'pink.100', cursor: 'pointer' }}
            transition='all 0.5s'
            p='1'
            maxW='350px'
          >
            <Text
              fontSize='xs'
              color='blackAlpha.500'
              paddingTop='80px'
              paddingBottom='20px'
              fontFamily='Josefin Sans'
            >
              DANCE INSIDE YOU
            </Text>
            <Heading size='xl' fontFamily='Josefin Sans'>
              The School
            </Heading>
            <Text
              fontSize='xs'
              color='blackAlpha.500'
              fontFamily='Josefin Sans'
            >
              July 15 - July 24, 2022
            </Text>
            <Text
              fontSize='xl'
              color='blackAlpha.500'
              fontFamily='Josefin Sans'
              paddingTop='10px'
            >
              The Ouenedit Ballet School offers years round, professional level
              dance training and dance classes in San Antonio
            </Text>
          </Stack>
        </Box>
      </Flex>
    </Container>
  )
}

export default App
