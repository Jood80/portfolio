import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'

const Work = () => (
  <Layout title="zaat">
    <Container mt="5em">  <WorkImage src="/images/works/cloudflare.png" alt="blog" />
      <Title>
        Unsplash <Badge>2020</Badge>
      </Title>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor sit cupiditate saepe, totam ex odit veritatis doloribus illo vel numquam alias corrupti veniam a, animi nihil, magnam minus reprehenderit incidunt debitis? In ipsa a quae, quos iste odio. Consectetur deserunt pariatur magnam quaerat voluptatibus asperiores nostrum! Quam est architecto eveniet ab provident magnam voluptas aspernatur 
        <br />
        • Number of people allowed to be in the showroom at the same time <br />{' '}
        • Number of hours allowed for each visit
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/Jood80/cloudflare-serverless/">
            {' '}
            https://github.com/Jood80/cloudflare-serverless/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          NodeJs, Express , postgresql, NodeMailer <br />
          React, Material-ui, Formik
        </ListItem>
      </List>
    
    </Container>
  </Layout>
)

export default Work
