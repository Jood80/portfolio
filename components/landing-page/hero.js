import NextLink from 'next/link'
import { Heading, Box, Button } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

import Section from '../section'
import Paragraph from '../paragraph'

const HeroSection = ({ delay }) => (
  <Section delay={delay}>
    <Heading as="h3" variant="section-title">
      Work
    </Heading>
    <Paragraph>
      Hey, I&apos;m a Full Stack developer based in Palestine , an avid learner
      who enjoys challenging myself when tackling complex technical problems. A
      Full Stack developer who&apos;s moved with backend engineering and systems
      architecture to build a scalable websites based on a clean code. I love
      working on a team and solving problems together. Adventurer at heart.
    </Paragraph>
    <Box align="center" my={7}>
      <NextLink href="/work">
        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
          My portfolio
        </Button>
      </NextLink>
    </Box>
  </Section>
)

export default HeroSection
