import { Heading, Container, Text, Center } from '@chakra-ui/react'

export default function New2() {
  return (
    <Container bg='pink.200' maxW='700px' paddingTop='10px'>
      <Center>
        <Heading size='2xl' paddingTop='20px' fontFamily='Josefin Sans'>
          The School
        </Heading>
      </Center>
      <Text
        fontSize='xl'
        color='blackAlpha.500'
        fontFamily='Josefin Sans'
        paddingTop='10px'
      >
        The Quenedit Ballet School offers year round, professional level dance
        training and dance classes in San Antonio. The directors, Ernesto
        Quenedit and Catalina Garza are passionate and dedicated teachers who
        hope to share their love of dance with all students. They draw on their
        combined twenty years of professional, international dance careers and
        fifteen years of teaching experience to create a program that benefits
        all students. Strengthening, flexibility and musicality are focused upon
        and the progress of all students is celebrated – from the youngest
        toddler to the pre-professional teen, with a world-class faculty and a
        comprehensive curriculum.
      </Text>
      <Center>
        <Heading size='xl' paddingTop='20px' fontFamily='Josefin Sans'>
          Summer Program 2022
        </Heading>
      </Center>
      <Heading size='sm' paddingTop='10px' fontFamily='Josefin Sans'>
        1) Summer Intensive Policies/Schedule
        <br /> 2) Kids Summer Camp
        <br /> 3) Summer Afternoon Classes
      </Heading>
      <Center>
        <Heading size='xl' paddingTop='20px' fontFamily='Josefin Sans'>
          SA Dance Festival 2022
        </Heading>
      </Center>
      <Text
        fontSize='xl'
        color='blackAlpha.500'
        fontFamily='Josefin Sans'
        paddingTop='10px'
      >
        The San Antonio multi-day Dance Festival is a vibrant artistic gathering
        designed to enrich the lives of the community through high-quality
        dance. It will be a visual treat full of energy, color, movement, and
        emotions that will delight the palate of all the audience. Let’s work
        united to reconstruct the performing arts! May 6 & 7, 2022 – Carver
        Community Cultural Center
      </Text>
    </Container>
  )
}
