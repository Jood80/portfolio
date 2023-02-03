import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'

const Work = () => (
  <Layout title="kitten rolodex">
    <Container mt="5em">
      <Title>
        Kitten Rolodex <Badge>AUG-2020</Badge>
      </Title>
      <Paragraph>
        One of the early stage learning projects, the site can display you bunch
        of weird kittens -who seem to be innocent- as animated cards.
      </Paragraph>
      <List my={4}>
        <ListItem>
          <Meta>STACK</Meta>
          <span>React, Axios</span>
        </ListItem>
        <ListItem>
          <Meta>CODE</Meta>
          <Link
            href="https://github.com/Jood80/kittens-rolodex"
            target="_blank"
          >
            https://github.com/Jood80/kittens-rolodex
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>WEBSITE</Meta>
          <Link href="https://kittens-rolodex.vercel.app/" target="_blank">
            kittens-rolodex.vercel.app/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <WorkImage src="/images/works/kittens.png" alt="ca" />
    </Container>
  </Layout>
)

export default Work
