import React from 'react'
import { useRouter } from 'next/router'
UnorderedList
import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '/components/work.js'
import Loader from '/components/loader'
import dynamic from 'next/dynamic'
import { personalProjects } from '/constants'

const DynamicLayout = dynamic(() => import('/components/layouts/article'), {
  ssr: false,
  loading: () => <Loader />
})

const DynamicParagraph = dynamic(() => import('/components/paragraph'), {
  ssr: false,
  loading: () => <Loader />
})

export default function Work() {
  const router = useRouter()
  const pageId = router.query.id

  const content = personalProjects.find(({ id }) => id === pageId)

  return (
    <>
      {content && (
        <DynamicLayout title={content.title}>
          <Container mt="5em">
            <Title>
              {content.title} <Badge>{content.date}</Badge>
            </Title>
            <DynamicParagraph>{content.description}</DynamicParagraph>
            {content.list &&
              React.Children.toArray(
                content.list.map(item => (
                  <UnorderedList ml={8}>
                    <ListItem>{item}</ListItem>
                  </UnorderedList>
                ))
              )}
            <List my={4}>
              <ListItem>
                <Meta>Stack</Meta>
                <span>{content.stack[0]}</span>
                <ListItem ml={14}>{content.stack[1]}</ListItem>
              </ListItem>

              <Meta>Code</Meta>
              <Link href={content.repo} target="_blank">
                {content.displayRepo ?? content.repo}
                <ExternalLinkIcon mx="2px" />
              </Link>

              {content.website && (
                <ListItem>
                  <Meta>Website</Meta>
                  <Link href={content.website} target="_blank">
                    {content.displayWebsite ?? content.website}
                    <ExternalLinkIcon mx="2px" />
                  </Link>
                </ListItem>
              )}
            </List>
            {content.video ? (
              <video
                controls
                muted
                poster={content.video.poster}
                style={{ width: '500px' }}
                // eslint-disable-next-line react/no-unknown-property
                autopictureinpicture="true"
                preload="none"
                controlsList="picture-in-picture"
              >
                <source src={content.video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <WorkImage
                src={content.displayImage ?? content.thumbnail.src}
                alt="blog"
              />
            )}
          </Container>
        </DynamicLayout>
      )}
    </>
  )
}
