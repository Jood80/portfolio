import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'

const Work = () => (
  <Layout title="code academy application">
    <Container mt="5em">
      <Title>
        Tweety <Badge>Jan-2022</Badge>
      </Title>
      <Paragraph>
        With Tweety you can create an account to tweet your thoughts on public
        and see others&apos; tweets as well. If you forgot your password, you
        can reset it and an email will be sent back to your account to set a new
        password.
      </Paragraph>
      <List my={4}>
        <ListItem>
          <Meta>STACK</Meta>
          <span>React.js, Chakra UI, Context API</span>
          <ListItem ml={14}>
            Node.js, Sequelize, PostgreSQL, Firebase for Auth/Emailing
          </ListItem>
        </ListItem>
        <ListItem>
          <Meta>CODE</Meta>
          <Link href="https://github.com/Jood80/bloggy/tree/dev">
            https://github.com/Jood80/tweety
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <video
        controls
        muted
        poster="/images/works/mytindy-preview.png"
        style={{ width: '500px' }}
        // eslint-disable-next-line react/no-unknown-property
        autopictureinpicture="true"
        preload="none"
        controlsList="picture-in-picture"
      >
        <source src="/videos/mytindy.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* <div
        style={{
          padding: '51.54% 0 0 0',
          position: 'relative'
        }}
      >
        <iframe
          src="https://player.vimeo.com/video/794093241?h=6c1fbdd1fe&title=0&byline=0&portrait=0"
          style={{
            border: 0,
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
          allow="autoplay; fullscreen; picture-in-picture"
        ></iframe>
      </div> */}
    </Container>
  </Layout>
)

export default Work
