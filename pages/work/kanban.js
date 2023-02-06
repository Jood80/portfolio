import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'

const Work = () => (
  <Layout title="todo hooks">
    <Container mt="5em">
      <Title>
        Kanban Board <Badge>Feb-2022</Badge>
      </Title>
      <Paragraph>
        Kanban is an interactive board and an authenticated personal board of
        yours so no none will stalk your progress-it&apos;s not like anyone
        cares really-, but you&apos;ll have your own account and you can sign
        out any time you want.in which you can:
      </Paragraph>
      <UnorderedList ml={8}>
        <ListItem>combine a group of tasks together</ListItem>
        <ListItem>drag and drop them</ListItem>
        <ListItem> add new tasks and modify them, and remove them</ListItem>
        <ListItem>change their priority order and color</ListItem>
        <ListItem>dash them if you&apos;ve successfull finish</ListItem>
      </UnorderedList>

      <List my={4}>
        <ListItem>
          <Meta>TECH</Meta>
          <span>Angular, Firebase, Angular-material</span>
        </ListItem>
        <ListItem>
          <Meta>CODE</Meta>
          <Link
            href="https://github.com/Jood80/kanban-board/tree/master"
            target="_blank"
          >
            https://github.com/Jood80/kanban-board
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://kanban-board-c40c0.web.app/">
            https://kanban-board-c40c0.web.app/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <WorkImage src="/images/works/kanban.png" alt="ca" />
    </Container>
  </Layout>
)

export default Work
