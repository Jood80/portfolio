import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'
import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'

const Smartphone = styled('div')`
  position: relative;
  width: 362px;
  height: 826px;
  margin: 0 auto auto;
  border: 16px black solid;
  border-top-width: 60px;
  border-bottom-width: 60px;
  border-radius: 36px;
  background-color: white;

  &:before {
    content: '';
    display: block;
    width: 60px;
    height: 5px;
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #333;
    border-radius: 10px;
  }

  &:after {
    content: '';
    display: block;
    width: 35px;
    height: 35px;
    position: absolute;
    left: 50%;
    bottom: -65px;
    transform: translate(-50%, -50%);
    background: #333;
    border-radius: 50%;
  }
`

const Content = styled('div')`
  width: 330px;
  height: 725px;
`

const Work = () => (
  <Layout title="MyTindy">
    <Container mt="6em">
      <Title>
        MyTindy<Badge>JUNE-2022</Badge>
      </Title>

          <Paragraph>
            Create an app to empower sellers with lower levels of literacy to
            list their products autonomously so they can sell through our
            platform. This app will be connected to our marketplace and will
            sync their products on our platform.
          </Paragraph>
          <List my={4}>
            <ListItem>
              <Meta>Stack</Meta>
              <span>Angular, Firebase, Ionic , Capacitor </span>
            </ListItem>
            <ListItem>
              <Meta>CODE</Meta>
              <Link
                href="https://github.com/MyTindy/mytindy-app"
                target="_blank"
              >
                 mytindy-app
                <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
          </List>


        {/* <WorkImage src="/images/works/mytindy.png" alt="ca" /> */}

        <Smartphone>
          <Content>
            <div
              style={{
                width: '100%',
                height: '0px',
                position: 'relative',
                paddingBottom: '214.286%'
              }}
            >
              <iframe
                src="https://player.vimeo.com/video/794086458?h=815af600e9"
                width="100%"
                height="100%"
                allowFullScreen
                style={{
                  border: 0,
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  left: '0px',
                  top: '0px',
                  bottom: '0px',
                  overflow: 'hidden'
                }}
              ></iframe>
            </div>
          </Content>
        </Smartphone>
  
    </Container>
  </Layout>
)

export const WorkStyle = () => (
  <Global
    styles={css`
      .work-item {
        border-radius: 10px;
        background-color: red;
      }
    `}
  />
)

export default Work

{
  /* <iframe src="https://player.vimeo.com/video/794086458?h=815af600e9" width="640" height="1371" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
<p><a href="https://vimeo.com/794086458">MyTindy Demo</a> from <a href="https://vimeo.com/user164857291">Nujud K.</a> on <a href="https://vimeo.com">Vimeo</a>.</p> */
}
