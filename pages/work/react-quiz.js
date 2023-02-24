import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '/components/work'
import Layout from '/components/layouts/article'
import Paragraph from '/components/paragraph'

const Work = () => (
  <Layout title="quiz app">
    <Container mt="5em">
      <Title>
        Quiz App <Badge>JAN-2020</Badge>
      </Title>
      <Paragraph>
        You&apos;ll be tested with multiple-choice questions in the computer
        science field, the difficulty level of each question will be randomized.
      </Paragraph>
      <List my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Typescript</span>
        </ListItem>
        <ListItem>
          <Meta>CODE</Meta>
          <Link href="https://github.com/Jood80/Quiz-app" target="_blank">
            https://github.com/Jood80/Quiz-app
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>WEBSITE</Meta>
          <Link href="https://comp-quiz.netlify.app/" target="_blank">
            https://comp-quiz.netlify.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <WorkImage src="/images/works/quiz.png" alt="Quiz" />
    </Container>
  </Layout>
)

export default Work
