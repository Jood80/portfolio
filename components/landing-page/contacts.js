import { Heading, Link, Button } from '@chakra-ui/react'
import {
  IoLogoGithub,
  IoLogoGoogle,
  IoLogoLinkedin,
  IoLogoDiscord,
  IoLogoWhatsapp
} from 'react-icons/io5'
import Section from '../section'

const ContantInfo = ({ delay }) => (
  <Section delay={delay}>
    <Heading as="h3" variant="section-title">
      Find Me
    </Heading>
    <Link
      href="https://www.linkedin.com/in/nujood-kadhem-4245721b3/"
      target="_blank"
    >
      <Button
        variant="ghost"
        colorScheme="teal"
        leftIcon={<IoLogoLinkedin size={23} />}
      />
    </Link>
    <Link href="https://discord.gg/user/Nujood#5153" target="_blank">
      <Button
        variant="ghost"
        colorScheme="teal"
        leftIcon={<IoLogoDiscord size={23} />}
      />
    </Link>
    <a href="mailto:shawar.nujood@gmail.com" target="_blank" rel="noreferrer">
      <Button
        variant="ghost"
        colorScheme="teal"
        leftIcon={<IoLogoGoogle size={23} />}
      />
    </a>
    <Link href="https://github.com/Jood80" target="_blank">
      <Button
        variant="ghost"
        colorScheme="teal"
        leftIcon={<IoLogoGithub size={25} />}
      />
    </Link>
    <Link
      href="https://api.whatsapp.com/send?phone=970597364889"
      target="_blank"
    >
      <Button
        variant="ghost"
        colorScheme="teal"
        leftIcon={<IoLogoWhatsapp size={25} />}
      />
    </Link>
  </Section>
)

export default ContantInfo
