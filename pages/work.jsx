import React from 'react'
import {
  Container,
  Heading,
  SimpleGrid,
  Divider,
  Grid,
  GridItem as GridItemChakra,
  Image
} from '@chakra-ui/react'

import Section from '../components/section'
import Layout from '../components/layouts/article'
import {
  GridItem,
  MyTindyGrid,
  PhoneItem,
  WorkGridItem
} from '../components/grid-item'
import myTindyLogo from '../public/images/works/mytindy.png'


import ccp from '/public/images/ccp.png'
import { collaborations, personalProjects } from '../lib/constants'

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
        
              <MyTindyGrid id="mytindy" thumbnail={myTindyLogo} title="MyTindy">
                
              </MyTindyGrid>
            </SimpleGrid> 
          {/* </SimpleGrid>

          {/* <Grid
            h="400px"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(5, 1fr)"
            gap={4}
          >
            <GridItemChakra rowSpan={2} colSpan={1} bg="tomato" />
            <GridItemChakra colSpan={2} bg="papayawhip" />
            <GridItemChakra colSpan={2} bg="papayawhip" />

              {/* <MyTindyGrid id="mytindy" thumbnail={myTindyLogo} title="MyTindy"/> */}
            {/* <GridItemChakra colSpan={4} bg="tomato">
              <Image src="/images/works/mytindy.png" alt="cssss" placeholder='blur' />
              
            </GridItemChakra>

          </Grid> */} 
        </Section>

        <Section delay={0.4}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            Certificates
          </Heading>
        </Section>
        <SimpleGrid columns={[1, 1, 2]}>
          <Section>
            <GridItem
              href="https://drive.google.com/file/d/1UAFbQju05xU2iPrkIzSeYEOzy4ulQ39D/view?usp=sharing"
              title="AWS Cloud Practitioner Certificate"
              thumbnail={ccp}
            ></GridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Work
