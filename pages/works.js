import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import strapiBlog from '../public/images/works/strapiBlog.png'

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="strapi" title="Strapi blog" thumbnail={strapiBlog}>
            A markdown note-taking app
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="ecomeerce" title="ecommerce" thumbnail={strapiBlog}>
            Ecommerce site{' '}
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="projecto" thumbnail={strapiBlog} title="urban">
            this is collabroation thing
          </WorkGridItem>
        </Section>
        <Section delay={0.4}>
          <WorkGridItem id="projecto" thumbnail={strapiBlog} title="urban">
            this is collabroation thing
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works
