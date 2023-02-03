import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'

const Work = () => (
  <Layout title="strapi blog">
    <Container mt="5em">
      <Title>
        Blog <Badge>AUG-2021</Badge>
      </Title>
      <Paragraph>
        The site meant to display blogs for you that&apos;s been added via
        Strapi CMS beforehand, you can filter them based on their category or
        all in one place.
      </Paragraph>
      <List my={4}>
        <ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React, Strapi, GraphQL, Docker.</span>
          </ListItem>
          <Meta>Code</Meta>
          <Link
            href="https://github.com/Jood80/strapi-blog"
            target="
          _blank"
          >
            https://github.com/Jood80/strapi-blog <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <WorkImage src="/images/works/strapiBlog.png" alt="blog" />
    </Container>
  </Layout>
)

export default Work
