import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { Heading } from '@chakra-ui/layout'
import Section from '../section'

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
    <BioSection>
      <BioYear>1995</BioYear>
      Born in Hebron, Palestine.
    </BioSection>
    <BioSection>
      <BioYear>2013</BioYear>
      Moved back from Jordan to Palestine
    </BioSection>
    <BioSection>
      <BioYear>2016</BioYear>
      Joined Erasmus Exchange program at the Fall of Middle East Technical
      university
    </BioSection>
    <BioSection>
      <BioYear>2018</BioYear>
      Graduted Mechanical Engineer- Mechatronics at Palestine Polytechnic
      university
    </BioSection>
    <BioSection>
      <BioYear>2020</BioYear>
      Joined GazaSkyGeeks CodeAcademy bootcamp
    </BioSection>
    <BioSection>
      <BioYear>2020</BioYear>
      Had a Frontend internship at Zaat.dev startups
    </BioSection>
    <BioSection>
      <BioYear>2021</BioYear>
      Had a Backend internship at Kiitos technologies
    </BioSection>
    <BioSection>
      <BioYear>2021</BioYear>
      Mentored group of students in a React bootcamp-GSG
    </BioSection>
  </Section>
)

export default BioTimeline
