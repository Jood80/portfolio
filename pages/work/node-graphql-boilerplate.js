import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '/components/work'
import Layout from '/components/layouts/article'

const Work = () => (
  <Layout title="Node GraphQL Boilerplate">
    <Container mt="5em">
      <Title>
        Node-Ts-GraphQL-Boilerplate <Badge>MAY-2021</Badge>
      </Title>

      <List my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Node.js, GraphQl-Yoga, TS, TypeORM, Argon2, Docker</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link
            href="https://github.com/Jood80/node-ts-graphQl-boilerplate"
            target="_blank"
          >
            https://github.com/Jood80/node-ts-graphQl-boilerplate
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <WorkImage src="/images/works/boilerplate.png" alt="ca" />
    </Container>
  </Layout>
)

export default Work
