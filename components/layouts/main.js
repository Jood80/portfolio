import dynamic from 'next/dynamic'
import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar'
import Footer from '../footer'
import Loader from '../loader'

const LazyDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <Loader />
})

const withLazyDogPages = new Set(['/', '/works', '/404'])
const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={2}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Nujood Kadhem - Landing Page </title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.lg" pt={2}>
        {withLazyDogPages.has(router.pathname) && <LazyDog />}
        {children}
      </Container>
      <Footer />
    </Box>
  )
}
export default Main
