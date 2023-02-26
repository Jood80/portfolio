import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue
} from '@chakra-ui/react'
import dynamic from 'next/dynamic'

import Loader from '/components/loader'

const DynamicLayout = dynamic(() => import('../components/layouts/article'), {
  ssr: false,
  loading: () => <Loader />
})

const DynamicHero = dynamic(
  () => import('../components/landing-page/hero.js'),
  {
    ssr: false,
    loading: () => <Loader />
  }
)
const DynamicBioTimeline = dynamic(
  () => import('../components/landing-page/bio'),
  {
    ssr: false,
    loading: () => <Loader />
  }
)
const DynamicHoppies = dynamic(
  () => import('../components/landing-page/interests'),
  {
    ssr: false,
    loading: () => <Loader />
  }
)
const DynamicContantInfo = dynamic(
  () => import('../components/landing-page/contacts'),
  {
    ssr: false,
    loading: () => <Loader />
  }
)

const LandingPage = () => (
  <DynamicLayout>
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        align="center"
      >
        &quot;You don&apos;t stop when it&apos;s done, you stop when it&apos;s
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
            src="/images/cube.jpg"
            width={20}
            height={20}
            objectFit="contain"
            alt="avatar"
          />
        </Box>
      </Box>
      <DynamicHero delay={0.1} />
      <DynamicBioTimeline delay={0.2} />
      <DynamicHoppies delay={0.3} />
      <DynamicContantInfo delay={0.4} />
    </Container>
  </DynamicLayout>
)

export default LandingPage
