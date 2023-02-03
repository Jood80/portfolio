import { Container, Badge, Link, List, ListItem, Image } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'

const Work = () => (
  <Layout title="to do app">
    <Container mt="5em">
      {' '}
      <Title>
        Spaghetti Recipe <Badge>2020</Badge>
      </Title>
      <Paragraph>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.
      </Paragraph>
      <List my={4}>
        <ListItem>
          <Meta>STACK</Meta>
          <span>Angular, Ionic</span>
        </ListItem>
        <ListItem>
          <Meta>CODE</Meta>
          <Link
            href="https://github.com/Jood80/ionic-angular-recipes"
            target="_blank"
          >
            https://github.com/Jood80/ionic-angular-recipes
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <Image
        src="/images/works/recipes.png"
        alt="ca"
        boxSize="500px"
        objectFit="contain"
      />
    </Container>
  </Layout>
)

export default Work
