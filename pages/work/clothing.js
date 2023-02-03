import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'

const Work = () => (
  <Layout title="clothing app">
    <Container mt="5em">
      <Title>
        Clothing App <Badge>AUG-2020</Badge>
      </Title>
      <Paragraph>
        A store that is provided with some features, such as:{' '}
      </Paragraph>
      <UnorderedList>
        <ListItem>Signup, Signin using email & password. </ListItem>
        <ListItem>Preview each collection products. </ListItem>
        <ListItem>Select your products to be added to the cart.</ListItem>
        <ListItem>Upcoming feature: add Stripe as payment method.</ListItem>
      </UnorderedList>
      <List my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Firebase.</span>
        </ListItem>
        <ListItem>
          <Meta>CODE</Meta>
          <Link href="https://github.com/Jood80/crwn-clothing" target="_blank">
            https://github.com/Jood80/crwn-clothing
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <WorkImage src="/images/works/ecm.gif" alt="ca" />
    </Container>
  </Layout>
)

export default Work
