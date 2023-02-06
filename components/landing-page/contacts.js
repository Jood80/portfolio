import { Heading, Link, Button, Box } from '@chakra-ui/react'
import Section from '../section'
import { socialMedia } from '../../lib/constants'

const ContantInfo = ({ delay }) => (
  <Section delay={delay}>
    <Heading as="h3" variant="section-title">
      Find Me
    </Heading>
    {socialMedia.map(channel => (
      // <Box className="contact-me" _hover="hover-contact-me" key={channel.name}>
      <Link
        href={channel.link}
        target="_blank"
        rel="noreferrer"
        key={channel.name}
      >
        <Button
          variant="ghost"
          colorScheme="teal"
          leftIcon={<channel.icon size={23} />}
        />
      </Link>
      // </Box>
    ))}
  </Section>
)

export default ContantInfo
