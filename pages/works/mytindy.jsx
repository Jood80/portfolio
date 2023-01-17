import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta, WorkImage } from '../../components/work'
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
  <>
    <Layout title="MyTindy">
      <Container mt="6em">
        <WorkImage src="/images/works/mytindy.webp" alt="ca" />
        <Title>
          MyTindy<Badge>2022</Badge>
        </Title>
        <Paragraph>
          Create an app to empower sellers with lower levels of literacy to list
          their products autonomously so they can sell through our platform.
          This app will be connected to our marketplace and will sync their
          products on our platform.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Code</Meta>
            <Link href="https://github.com/MyTindy/mytindy-app" target="_blank">
              https://github.com/MyTindy/mytindy-app{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Angular, Firebase, Ionic , Capacitor </span>
          </ListItem>
        </List>{' '}
      </Container>
    </Layout>
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
            src="https://streamable.com/e/8g3j21"
            width="100%"
            height="100%"
            allowFullScreen
            style={{
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
  </>
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
