import React from 'react'
import { Container, Heading, SimpleGrid, Divider, Box } from '@chakra-ui/react'

import Section from '/components/section'
import Layout from '/components/layouts/article'
import {
  GridItem,
  MyTindyGrid,
  PhoneItem,
  WorkGridItem
} from '/components/grid-item'

import ccp from '/public/images/ccp.png'
import myTindyLogo from '/public/images/works/mytindy.png'
import { collaborations, personalProjects } from '/constants'
// import dynamic from 'next/dynamic'

// const DynamicGridItem = dynamic(() => import('../components/grid-item'), {
//   ssr: false,
// })

const Work = () => {
  return (
    <Layout title="work">
      <Container maxW="container.md">
        <Heading as="h3" fontSize={20} mb={4} ml={4}>
          Work
        </Heading>

        <SimpleGrid columns={[1, 1, 3]} gap={1}>
          {React.Children.toArray(
            personalProjects.map(({ id, title, thumbnail }) => (
              <Section>
                {!['recipes', 'spaceX'].includes(id) ? (
                  <WorkGridItem
                    id={id}
                    title={title}
                    thumbnail={thumbnail}
                  ></WorkGridItem>
                ) : (
                  <PhoneItem
                    id={id}
                    title={title}
                    thumbnail={thumbnail}
                  ></PhoneItem>
                )}
              </Section>
            ))
          )}
        </SimpleGrid>

        <Section delay={0.2}>
          <Divider my={6} />
          <Heading as="h3" fontSize={20} mb={4} ml={6}>
            Collaborations
          </Heading>
        </Section>

        <Section delay={0.3}>
          <SimpleGrid columns={[1, 1, 3]} gap={2}>
            {collaborations.map(({ href, title, thumbnail, description }) => {
              return (
                <GridItem
                  key={href}
                  href={href}
                  title={title}
                  thumbnail={thumbnail}
                >
                  {description}
                </GridItem>
              )
            })}

            <MyTindyGrid
              id="mytindy"
              thumbnail={myTindyLogo}
              title="MyTindy"
            ></MyTindyGrid>
          </SimpleGrid>
        </Section>

        <Section delay={0.4}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            Certificates
          </Heading>
        </Section>
        <SimpleGrid columns={[1, 1, 3]}>
          <Section>
            <Box m={0}>
              <GridItem
                href="https://drive.google.com/file/d/1UAFbQju05xU2iPrkIzSeYEOzy4ulQ39D/view?usp=sharing"
                title="AWS Cloud Practitioner Certificate"
                thumbnail={ccp}
              ></GridItem>
            </Box>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Work
