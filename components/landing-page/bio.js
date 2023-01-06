import { Box } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/layout'
import styled from '@emotion/styled'
import Section from '../section'
import { timeline } from '../../lib/constants'

export const BioSection = styled(Box)`
  padding-left: 3.4em;
  padding-bottom: 0.6em;
  text-indent: -3.4em;
`

export const BioYear = styled.span`
  font-weight: bold;
  margin-right: 1em;
`

const BioTimeline = ({ delay }) => (
  <Section delay={delay}>
    <Heading as="h3" variant="section-title">
      Bio
    </Heading>

    {timeline.map(slot => (
      <BioSection key={slot.id}>
        <BioYear>{slot.year}</BioYear>
        {slot.action}
      </BioSection>
    ))}
  </Section>
)

export default BioTimeline
