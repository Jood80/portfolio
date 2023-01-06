import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import {
  HeroSection,
  BioTimeline,
  Hoppies,
  ContantInfo
} from '../components/landing-page'

const LandingPage = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        align="center"
      >
        {' '}
        &quot; You don&apos;t stop when it&apos;s done, you stop when it&apos;s
        right.&quot; Uncle Bob
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Nujood Kadhem
          </Heading>
          <p>
            Software Developer (Backend Focused, Mechatronics Engineer-Robotics)
          </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          mb={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/jood.jpeg"
            width={20}
            height={20}
            alt="my avatar"
          />
        </Box>
      </Box>
      <HeroSection delay={0.1} />
      <BioTimeline delay={0.2} />
      <Hoppies delay={0.3} />
      <ContantInfo delay={0.4} />
    </Container>
  </Layout>
)

export default LandingPage
