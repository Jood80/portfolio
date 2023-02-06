import NextLink from 'next/link'
import { chakra } from '@chakra-ui/react'

import NextImage from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

const Image = chakra(NextImage, {
  baseStyle: { maxH: 120, maxW: 120 },
  shouldForwardProp: prop =>
    [
      'width',
      'height',
      'src',
      'alt',
      'quality',
      'placeholder',
      'blurDataURL',
      'loader '
    ].includes(prop)
})

export const MyTindyGrid = ({ children, id, title, thumbnail }) => (
  <Box textAlign="center">
    <NextLink href={`/work/${id}`}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
          width="200em"
          height="185em"
        />
        <LinkOverlay href={`/work/${id}`}>
          <Text mt={2} fontSize={20} textAlign="center">
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box
    // w="70%"
    align="center"
    // boxSize="sm"
    // boxSize="calc(30vh)"
  >
    <LinkBox cursor="pointer">
      <LinkOverlay href={href} target="_blank">
        <Image
          src={thumbnail}
          alt={title}
          objectFit="fit"
          borderRadius="xl"
          // display="inline-block"
          // className="grid-item-thumbnail image-collaborations "
          placeholder="blur"
          loading="lazy"
          // boxSize="200px"
          width="200em"
          height="185em"
        />
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const PhoneItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <NextLink href={`/work/${id}`}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
          width="200px"
          height="150px"
          objectFit="cover"
        />
        <LinkOverlay href={`/work/${id}`}>
          <Text mt={2} fontSize={20} textAlign="center">
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <NextLink href={`/work/${id}`}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
          width="200px"
          height="185px"
          // objectFit="cover"
        />
        <LinkOverlay href={`/work/${id}`}>
          <Text mt={2} fontSize={20} textAlign="center">
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
        overflow: hidden;
      }

      .fix-image-size {
        height: 20%;
        width: 85%;
      }

      .image-collaborations {
        height: 50%;
        width: 50%;
      }

      .contact-me {
        transition: all 0.2s ease-in-out;
      }
      .hover-contact-me {
        transform: scale(1.2); 
      }
    `}
  />
)
