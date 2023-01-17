import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'

const Work = () => (
  <Layout title="kitten rolodex">
    <Container mt="5em">
      <WorkImage src="/images/works/kittens.png" alt="ca" />
      <Title>
        Kitten Rolodex <Badge>2020</Badge>
      </Title>
      <Paragraph>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/Jood80/kittens-rolodex">
            https://github.com/Jood80/kittens-rolodex
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Axios</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
