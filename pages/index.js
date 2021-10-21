import { Container, Box, Heading } from '@chakra-ui/react'

const LandingPage = () => (
  <Container>
    <Box borderRadius="lg" bg="gray" p={3} mb={3} align="center">
      Hey, I&apos;m a backend engineer based in Palestine
    </Box>
    <Box display={{ md: 'flex' }}>
      <Box flexGrow={1}>
        <Heading as="h2" variant="page-title">
          Nujood Kadhem
        </Heading>
        <p>Learner (Mechatronics Enginner, Robotics, Developer)</p>
      </Box>
    </Box>
  </Container>
)

export default LandingPage
