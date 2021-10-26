import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  Button,
  List,
  ListItem,
  SimpleGrid,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { GridItem } from '../components/grid-item'
import {
  IoLogoGithub,
  IoLogoGoogle,
  IoLogoLinkedin,
  IoLogoDiscord
} from 'react-icons/io5'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

const LandingPage = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        align="center"
      >
        Hey, I&apos;m a backend engineer based in Palestine
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Nujood Kadhem
          </Heading>
          <p>Learner (Mechatronics Enginner, Robotics, Developer)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/jood.jpeg"
            width={20}
            height={20}
            alt="my avatar"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum{' '}
          <NextLink href="/works/blogger">
            <Link>bloger</Link>
          </NextLink>
          .
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
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

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            ❤️
          </Heading>
          <Paragraph>
            Martial-arts/Kata, Hicking, Drifting, Chess, handCrafting, Robotics,
            differnital equations.
          </Paragraph>
        </Section>
      </Section>

      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          Contact Me
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Jood80" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                Github
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/nujood-kadhem-4245721b3/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                Linkedin
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="shawar.nujood@gmail.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGoogle />}
              >
                Gmail
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://discord.gg/user/Nujood#5153" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoDiscord />}
              >
                Discord
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default LandingPage
