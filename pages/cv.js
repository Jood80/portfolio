import { Box, Spinner } from '@chakra-ui/react'

const CV = () => {
  return (
    <Box w="100%" mt={20} align="center">
      <iframe
        src="https://drive.google.com/file/d/1seDWUlmrBQrR9LgB37K5y1FfscTRGy6h/preview"
        title="My CV"
        width="80%"
        height="1000"
        loading="lazy"
        onLoad={() => (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        )}
      />
    </Box>
  )
}

export default CV
