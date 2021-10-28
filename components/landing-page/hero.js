import NextLink from 'next/link'
import { Heading, Link, Box, Button } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../section'
import Paragraph from '../paragraph'

const HeroSection = ({ delay }) => (
  <Section delay={delay}>
    <Heading as="h3" variant="section-title">
      Work
    </Heading>
    <Paragraph>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industrys standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem Ipsum{' '}
      <NextLink href="/works/strapi">
        <Link>bloger</Link>
      </NextLink>
      .
    </Paragraph>
    <Box align="center" my={7}>
      <NextLink href="/works">
        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
          My portfolio
        </Button>
      </NextLink>
    </Box>
  </Section>
)

export default HeroSection
