import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  useDisclosure,
  Stack,
} from '@chakra-ui/react'
import React from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Link } from 'react-scroll'

function Menu({ link, text }) {
  return (
    <li style={{ cursor: 'pointer', listStyleType: 'none' }}>
      <Link
        activeClass='active'
        to={link}
        // spy={true} //выделение Link при достижении целевой позиции scroll
        smooth={true} //анимация прокрутки
        duration={500} //время анимации прокрутки
      >
        {text}
      </Link>
    </li>
  )
}

export default function DrawerExample({ text, link }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  const textMenu = [
    { text: 'Link to store website', link: 'linktostwebsite' },
    { text: 'Dance video ', link: 'DanceVideo' },
    { text: 'Timetable of classes', link: 'TimetableOfCla' },
  ]

  return (
    <>
      <IconButton
        ref={btnRef}
        onClick={onOpen}
        colorScheme='pink.200'
        aria-label='Search database'
        icon={<HamburgerIcon color='black' boxSize={10} />}
        _hover={{ bg: 'pink.100' }}
      ></IconButton>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg='rgba(251, 182, 206, 0.9 )' fontFamily='Josefin Sans'>
          <DrawerCloseButton />
          <DrawerHeader bg='pink.100' color='black'>
            Menu
          </DrawerHeader>

          <DrawerBody>
            <Stack
              // direction={{ base: 'column', lg: 'row' }}
              fontWeight='400'
              spacing={{ base: '0.1em', lg: '0em' }}
              fontSize={{ base: 'xl', lg: '2xl' }}
            >
              {textMenu.map((e) => (
                <Menu link={e.link} key={e} text={e.text} />
              ))}
            </Stack>
          </DrawerBody>

          <DrawerFooter bg='pink.100' color='black'></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
