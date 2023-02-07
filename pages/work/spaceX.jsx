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
import { Title, Meta } from '../../components/work'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'

const Work = () => (
  <Layout title="SpaceX">
    <Container mt="5em">
      <Title>
        SpaceX Launch <Badge>2020</Badge>
      </Title>
      <SimpleGrid columns={[1, 1, 2]} spacing={19}>
        <Box>
          <Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </Paragraph>
          <List my={4}>
            <ListItem>
              <Meta>STACK</Meta>
              <span>Angular, Ionic, GraphQL </span>
            </ListItem>
            <ListItem>
              <Meta>CODE</Meta>
              <Link href="https://github.com/Jood80/ionic-pql" target="_blank">
                {' '}
                ionic-pql <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
          </List>
        </Box>

        <Image src="/images/works/spacex.png" alt="ca" height="400px" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
