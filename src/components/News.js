import { Text, Heading, Stack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function H({ header, data, text, isOptionalText, link }) {
  return (
    <Stack
      _hover={{ bg: 'pink.100', cursor: 'pointer' }}
      transition='all 0.5s'
      p='1'
      maxW='350px'
      as={Link}
      target='_blank'
      to={link}
    >
      <Text
        display={isOptionalText ? 'block' : 'none'}
        fontSize='xs'
        color='blackAlpha.500'
        paddingBottom='20px'
        fontFamily='Josefin Sans'
        paddingTop='20px'
      >
        DANCE INSIDE YOU
      </Text>
      <Heading size='xl' fontFamily='Josefin Sans'>
        {header}
      </Heading>
      <Text fontSize='xs' color='blackAlpha.500' fontFamily='Josefin Sans'>
        {data}
      </Text>
      <Text
        fontSize='xl'
        color='blackAlpha.500'
        fontFamily='Josefin Sans'
        paddingTop='10px'
        noOfLines={2}
      >
        {text}
      </Text>
    </Stack>
  )
}
