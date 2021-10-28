import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm" mt={10}>
      &copy; {new Date().getFullYear()}. All Rights Reserved to Takuya Matsuyama
    </Box>
  )
}

export default Footer
