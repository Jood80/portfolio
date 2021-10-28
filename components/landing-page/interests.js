import { Heading } from '@chakra-ui/layout'
import Section from '../section'
import Paragraph from '../paragraph'

const Hoppies = ({ delay }) => (
  <Section delay={delay}>
    <Heading as="h3" variant="section-title">
      ❤️
    </Heading>
    <Paragraph>
      Martial-arts/Kata, Hicking, Drifting, Chess, handCrafting, Robotics,
      differnital equations.
    </Paragraph>
  </Section>
)

export default Hoppies
