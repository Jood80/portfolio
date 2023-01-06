import { Heading, Link, Button } from '@chakra-ui/react'
import Section from '../section'
import { socialMedia } from '../../lib/constants'

const ContantInfo = ({ delay }) => (
  <Section delay={delay}>
    <Heading as="h3" variant="section-title">
      Find Me
    </Heading>
    {socialMedia.map(channel => (
      <Link
        href={channel.link}
        target="_blank"
        key={channel.name}
        rel="noreferrer"
      >
        <Button
          variant="ghost"
          colorScheme="teal"
          leftIcon={<channel.icon size={23} />}
        />
      </Link>
    ))}
  </Section>
)

export default ContantInfo
