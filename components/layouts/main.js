import Head from 'next/head'
import dynamic from 'next/dynamic'
import Navbar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Loader from '../loader'
import Footer from '../footer'

const LazyDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <Loader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Nujood Kadhem - Landing Page </title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        <LazyDog />
        {children}
      </Container>
      <Footer />
    </Box>
  )
}
export default Main
