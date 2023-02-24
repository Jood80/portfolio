import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '/components/work'
import Layout from '/components/layouts/article'
import Paragraph from '/components/paragraph'

const Work = () => (
  <Layout title="Nextup Comedy">
    <Container>
      <Title>
        Express Typescript BoilerPlate <Badge>2020</Badge>
      </Title>
      <Paragraph>
        As the lockdown and corona-virus begin to subside in New Jersey, this
        application designed to help shops re-opening their showroom with half
        capacity, the main problem comes to have the control over:
        <br />
        • Number of people allowed to be in the showroom at the same time <br />{' '}
        • Number of hours allowed for each visit
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/NextUp-comedy">
            {' '}
            https://github.com/NextUp-comedy <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          NodeJs, Express , postgresql, NodeMailer
        </ListItem>
      </List>
      <WorkImage src="/images/works/nextup-comedy.png" alt="blog" />
    </Container>
  </Layout>
)

export default Work
