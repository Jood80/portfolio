import NextLink from 'next/link'
import { Container, Box, Link, Stack, Flex, Heading } from '@chakra-ui/layout'
import { Menu, MenuItem, MenuList, MenuButton } from '@chakra-ui/menu'
import { HamburgerIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/button'
import { useColorModeValue } from '@chakra-ui/color-mode'
import Logo from './logo'
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ({ href, path, children }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink href={href} passHref>
      <Link
        px={6}
        bg={active ? 'glassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        borderRadius={active ? '3px' : undefined}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
    >
      <Container
        display="flex"
        p={2}
        maxw="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={2}
          mt={{ base: 2, md: 2 }}
        >
          <LinkItem href="/works" path={path}>
            Work
          </LinkItem>
          <LinkItem href="/cv" path={path}>
            CV
          </LinkItem>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/jood80"
          >
            Github
          </a>
        </Stack>

        {/* Mobile Menu */}
        <Box flex={1} align="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/">
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/works">
                  <MenuItem as={Link}>Work</MenuItem>
                </NextLink>
                <NextLink href="/cv">
                  <MenuItem as={Link}>CV</MenuItem>
                </NextLink>
                <MenuItem as={Link} href="https://github.com/jood80">
                  Github
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
