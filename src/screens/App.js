import React, { useState } from 'react'
import {
  Text,
  Container,
  Center,
  Stack,
  Heading,
  Flex,
  Select,
  Button,
  Box,
} from '@chakra-ui/react'
import '../styles.css'

function App() {
  const [colorText, setColorText] = useState('')
  const [colorId, setColorId] = useState(1)
  const [memText, setMemText] = useState('')

  function changeColorText(text) {
    setColorText(text)
  }

  function changeColorId(e) {
    resetColorText()
    setColorId(e.target.value)
  }

  function resetColorText() {
    setColorText('')
  }

  function fetchColorData() {
    let id = colorId

    let data = {
      method: 'POST',
      type: 'cors',
      body: id,
    }

    fetch('http://localhost:8000', data)
      .then((res) => res.json())
      .then(
        (result) => {
          changeColorText(result['TEXT'])
        },
        (error) => {
          console.log(error)
        }
      )
  }

  function resetMemText() {
    setMemText('')
  }

  function changeMemText(text) {
    setMemText((text += '%'))
  }

  function fetchFreeMemoryData() {
    let id = colorId

    let data = {
      method: 'GET',
      type: 'cors',
    }

    fetch('http://localhost:9000')
      .then((res) => res.json())
      .then(
        (result) => {
          changeMemText(result['TEXT'])
        },
        (error) => {
          console.log(error)
        }
      )
  }

  return (
    <Flex>
      <Container
        bg='#276749'
        maxW='600px'
        paddingTop='10px'
        marginTop='230px'
        paddingBottom='5'
        onClick={resetColorText}
      >
        <Stack spacing={3}>
          <Heading
            size='lg'
            fontFamily='Josefin Sans'
            paddingTop='20px'
            color='#D69E2E'
          >
            ПОМЕНЯЙ
          </Heading>
          <Heading size='lg' fontFamily='Josefin Sans' color='#D69E2E'>
            ЦВЕТ
          </Heading>
          <Heading
            size='lg'
            paddingBottom='10'
            fontFamily='Josefin Sans'
            color='#D69E2E'
          >
            ШРИФТА
          </Heading>
        </Stack>
        <Flex justifyxContent='left' maxW='600px' paddingBottom='2'>
          <Select
            bg='#22543D'
            borderColor='#22543D'
            maxW='300px'
            onChange={changeColorId}
            colorScheme='#D69E2E'
            color='#D69E2E'
          >
            <option defaultValue value='1'>
              Красный
            </option>
            <option value='2'>Черный</option>
            <option value='3'>Синий</option>
            <option value='4'>Голубой</option>
            <option value='5'>Зеленый</option>
            <option value='6'>Фиолетовый</option>
            <option value='7'>Белый</option>
            <option value='8'>Желтый</option>
          </Select>
          <Button
            onClick={fetchColorData}
            colorScheme='yellow'
            color='#D69E2E'
            variant='ghost'
            marginLeft='1'
          >
            Поменять
          </Button>
        </Flex>
        <Box
          dangerouslySetInnerHTML={{ __html: colorText }}
          borderRadius='md'
          textAlign='center'
          w='300px'
          bg='#22543d'
          h='38px'
        ></Box>
      </Container>
      <Container
        onClick={resetMemText}
        bg='#D69E2E'
        maxW='600px'
        paddingTop='10px'
        marginTop='230px'
      >
        <Stack spacing={3}>
          <Heading
            size='lg'
            fontFamily='Josefin Sans'
            paddingTop='20px'
            color='#276749'
          >
            УЗНАЙ ОБЪЕМ
          </Heading>
          <Heading size='lg' fontFamily='Josefin Sans' color='#276749'>
            СВОБОДНОЙ
          </Heading>
          <Heading
            size='lg'
            paddingBottom='10'
            fontFamily='Josefin Sans'
            color='#276749'
          >
            ФИЗИЧЕСКОЙ ПАМЯТИ
          </Heading>
        </Stack>
        <Flex justifyxContent='left' maxW='600px' paddingBottom='2'>
          <Button
            onClick={fetchFreeMemoryData}
            colorScheme='green'
            color='#276749'
            variant='ghost'
            marginLeft='1'
          >
            Узнать
          </Button>
        </Flex>
        <Box
          textAlign='center'
          borderRadius='md'
          w='300px'
          bg='#276749'
          h='38px'
          color='#D69E2E'
        >
          {memText}
        </Box>
      </Container>
    </Flex>
  )
}

export default App
