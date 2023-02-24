import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '/components/work'
import Layout from '/components/layouts/article'
import Paragraph from '/components/paragraph'

const Work = () => (
  <Layout title="zaat">
    <Container mt="5em">
      <Title>
        Unsplash <Badge>2022</Badge>
      </Title>
      <Paragraph>
        Serverless cloudflare workers has been used to fetch the users some
        pictures based on their search input.
      </Paragraph>
      <List my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          React, Express, cloudflare
        </ListItem>
        <ListItem>
          <Meta>CODE</Meta>
          <Link href="https://github.com/Jood80/cloudflare-serverless/">
            {' '}
            https://github.com/Jood80/cloudflare-serverless/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>WEBSITE</Meta>
          <Link href="https://2be32bf9.cloudflare-serverless-6qh.pages.dev/">
            https://2be32bf9.cloudflare-serverless-6qh.pages.dev/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <WorkImage src="/images/works/cloudflare.png" alt="blog" />
    </Container>
  </Layout>
)

export default Work
