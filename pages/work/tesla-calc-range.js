import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'

const Work = () => (
  <Layout title="Tesla Calculator Range">
    <Container mt="5em">
      <Title>
        Tesla Calculator Range <Badge>JUL-2022</Badge>
      </Title>
      <Paragraph>
        For Tesla users or you Ms/Mr reader who may/may not want to buy one in
        the future. Here is a calculator that can check Tesla’s battery range
        for you, based on number of factors: temperature, the car&apos;s speed
        and its wheels size.
      </Paragraph>
      <List my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Redux.</span>
        </ListItem>
        <ListItem>
          <Meta>CODE</Meta>
          <Link
            href="https://github.com/Jood80/tesla-range-calculator"
            target="_blank"
          >
            {' '}
            https://github.com/Jood80/tesla-range-calculator
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://tesla-range-calc.surge.sh/" target="_blank">
            {' '}
            https://tesla-range-calc.surge.sh/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <WorkImage src="/images/works/tesla.png" alt="tesla" />
    </Container>
  </Layout>
)

export default Work
