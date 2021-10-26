import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import strapiBlog from '../public/images/works/strapiBlog.png'

const Posts = () => (
  <Layout title="posts">
    <Container>
      <Heading as="h4" fontSize={20} mb={4}>
        My past
      </Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="My graduation project"
            thumbnail={strapiBlog}
            href="https://www.google.com/"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
