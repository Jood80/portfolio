import Head from 'next/head'
import { motion } from 'framer-motion'
import { GridItemStyle } from '../grid-item'
import { Box } from '@chakra-ui/react'

const variants = {
  hidden: {
    opacity: 0,
    x: 0,
    y: 20
  },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
}

const Layout = ({ children, title }) => (
  <motion.article
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={variants}
    transition={{ duration: 0.4, type: 'easeInOut' }}
    style={{ position: 'relative' }}
  >
    <Box maxW="container.lg">
      {title && (
        <Head>
          <title>{title} - Nujood</title>
          <meta name="portfolio" content="This is a portfolio"></meta>
        </Head>
      )}
      {children}
      <GridItemStyle />
    </Box>
  </motion.article>
)

export default Layout
