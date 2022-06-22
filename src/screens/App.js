import React from 'react'
import {
  Text,
  Container,
  Stack,
  Heading,
  Divider,
  Image,
  Center,
  Flex,
  IconButton,
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import '../styles.css'
import H from '../components/News'
import Menu from '../components/Menu'
import img from '../assets/imgs/balet.jpg'
import img1 from '../assets/imgs/balerina.jpg'
import img2 from '../assets/imgs/balerina2.jpg'
import img3 from '../assets/imgs/balerina3.jpg'
import img4 from '../assets/imgs/balerina4.jpg'
import img5 from '../assets/imgs/balerina5.jpg'
import img6 from '../assets/imgs/balerina6.jpg'
import img7 from '../assets/imgs/balerina7.jpg'
import { Carousel } from 'react-carousel-minimal'

function App() {
  const linkstexts = [
    {
      header: 'Sumer Intensive 2022',
      data: 'July 15 - July 24, 2022',
      text: 'Come and join us for 2020 Summer Intensive progran in classical ballet with a comprehensive curriculum',
      isOptionalText: false,
      link: '/New',
    },
    {
      header: 'The School',
      data: 'July 15 - July 24, 2022',
      text: 'The Ouenedit Ballet School offers years round, professional level dance training and dance classes in San Antonio',
      isOptionalText: true,
      link: '/New2',
    },
  ]
  const dance = [
    { image: img },
    { image: img1 },
    { image: img2 },
    { image: img3 },
    { image: img4 },
    { image: img5 },
    { image: img6 },
    { image: img7 },
  ]

  return (
    <Container bg='pink.200' maxW='700px' paddingTop='10px'>
      <Flex justifyContent='space-between'>
        <IconButton
          colorScheme='pink.200'
          aria-label='Search database'
          icon={<SearchIcon color='black' boxSize={10} />}
          _hover={{ bg: 'pink.100' }}
          name='search'
        />
        <Menu />
      </Flex>
      <Stack spacing={3}>
        <Heading size='3xl' fontFamily='Josefin Sans' paddingTop='20px'>
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
      <Divider
        // orientation='horizontal'
        borderColor='blackAlpha.500'
        bg='blackAlpha.300'
        borderWidth='2px'
        borderRadius='full'
      />
      <Stack spacing={3}>
        <Heading size='2xl' paddingTop='80px' fontFamily='Josefin Sans'>
          NOW REGISTERING FOR
        </Heading>
        <Heading size='2xl' paddingBottom='10' fontFamily='Josefin Sans'>
          2020 SUMMER INTENSIVE
        </Heading>
      </Stack>
      <Flex direction='column'>
        <Center>
          {/* <Image src={img} alt='Balerina' /> */}
          <Carousel
            data={dance}
            time={20000}
            width='700px'
            height='500px'
            // captionStyle={captionStyle}
            // radius='10px'
            slideNumber={true}
            // slideNumberStyle={slideNumberStyle}
            // captionPosition='bottom'
            automatic={true}
            dots={true} // РёРЅРґРёРєР°С‚РѕСЂС‹ РІРЅРёР·Сѓ РєР°СЂС‚РёРЅРѕРє (С‚РѕС‡РєРё)
            pauseIconColor='white'
            pauseIconSize='40px'
            slideBackgroundColor='rgba(202, 200, 185, 1)'
            slideImageFit='cover' //РЈСЃС‚Р°РЅР°РІР»РёРІР°РµС‚ В«РїРѕРґРіРѕРЅРєСѓ РѕР±СЉРµРєС‚Р°В» РёР·РѕР±СЂР°Р¶РµРЅРёСЏ СЃР»Р°Р№РґРѕРІ,РґРѕСЃС‚СѓРїРЅС‹Рµ РІР°СЂРёР°РЅС‚С‹ В«coverВ» Рё В«containВ»
            // thumbnails={true} //Р’РєР»СЋС‡Р°РµС‚ РёРЅРґРёРєР°С‚РѕСЂС‹ СЌСЃРєРёР·РѕРІ
            // thumbnailWidth='100px' //РЁРёСЂРёРЅР° РјРёРЅРёР°С‚СЋСЂС‹, РїРѕ СѓРјРѕР»С‡Р°РЅРёСЋ 100 РїРёРєСЃРµР»РµР№.
            style={{
              textAlign: 'center',
              maxWidth: '90vw',
              maxHeight: '5000px',
              margin: '40px auto',
            }}
          ></Carousel>
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
      <Flex paddingTop='35' paddingBottom='10'>
        {linkstexts.map((e) => (
          <H key={e.data} {...e} />
        ))}
      </Flex>
    </Container>
  )
}

export default App
