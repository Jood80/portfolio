import React from 'react'
import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'

import Section from '../components/section'
import Layout from '../components/layouts/article'
import { GridItem, WorkGridItem } from '../components/grid-item'

import myTindyLogo from '/public/images/works/mytindy.webp'
import ccp from '/public/images/ccp.png'
import { collaborations, personalProjects } from '../lib/constants'



const Works = () => {
  return (
    <Layout title="works">
      
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 4]} gap={6}>
          {React.Children.toArray(
            personalProjects.map(({ id, title, thumbnail }) => (
              <Section>
                <WorkGridItem
                  id={id}
                  title={title}
                  thumbnail={thumbnail}
                ></WorkGridItem>
              </Section>
            ))
          )}
        </SimpleGrid>

        <Section delay={0.2}>
          <Divider my={6} />
          <Heading as="h3" fontSize={20} mb={4}>
            Collaborations
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          {collaborations.map(({ href, title, thumbnail, description }) => {
            return (
              <Section key={href} delay={0.3}>
                <GridItem href={href} title={title} thumbnail={thumbnail}>
                  {description}
                </GridItem>
              </Section>
            )
          })}
        </SimpleGrid>

        <Section delay={0.4}>
          <WorkGridItem
            id="mytindy"
            thumbnail={myTindyLogo}
            title="MyTindy"
          >
            empower sellers with lower levels of literacy to list their products
            autonomously so they can sell through our platform
          </WorkGridItem>
        </Section>

        <Section delay={0.4}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            Certificates
          </Heading>
        </Section>
        <SimpleGrid columns={[1, 1, 1]}>
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

export default Works
