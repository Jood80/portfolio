import { Heading } from '@chakra-ui/layout'
import Section from '../section'
import Paragraph from '../paragraph'

const Hoppies = ({ delay }) => (
  <Section delay={delay}>
    <Heading as="h3" variant="section-title">
      ❤️
    </Heading>
    <Paragraph>
      Distributed Systems, Martial-arts, Hicking, Drifting, Studio Ghibli,
      Chatting with mother, Robotics, Chess.
    </Paragraph>
  </Section>
)

export default Hoppies
