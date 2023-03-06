import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Image,
  SimpleGrid,
  Box
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '/components/work'
import Layout from '/components/layouts/article'
import Paragraph from '/components/paragraph'

const Work = () => (
  <Layout title="to do app">
    <Container mt="5em">
      <Title>
        Spaghetti Recipes <Badge>MAR-2022</Badge>
      </Title>
      <SimpleGrid gap={2} columns={[1, 1, 2]}>
        <Box my={4}>
          <Paragraph>
            A mobile application that provides you with different types of
            spaghetti dishes, you can navigate through your favorite dish and
            check its ingredients.
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
                ionic-angular-recipes
                <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
          </List>
        </Box>
        <Image
          src="/images/works/recipes.png"
          alt="ca"
          boxSize="500px"
          objectFit="contain"
        />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
