import { Heading } from '@chakra-ui/layout'
import Section from '../section'
import Paragraph from '../paragraph'

const Hoppies = ({ delay }) => (
  <Section delay={delay}>
    <Heading as="h3" variant="section-title">
      Things I ❤️
    </Heading>
    <Paragraph>
      Distributed Systems, Martial-arts, Hiking, Aerodynamics, Drifting,
      Mother&apos;s Conversations, Fluids in slow motions, Imagine Dragons,
      Studio Ghibli, Climbing/Jumping off the Cliffs, Watching flame.
    </Paragraph>
  </Section>
)

export default Hoppies
