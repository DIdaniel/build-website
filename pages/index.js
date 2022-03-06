import NextLink from 'next/link'
import {
  Button,
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('WhiteAlpha.500', 'WhiteAlpha.200')}
        mb={6}
        p={3}
        align="center"
      >
        Hello, I&apos;m a frontend developer based in Seoul, Korea!😎
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            KIM DONG IL
          </Heading>
          <p>Digital Cratfzman ( Artist / Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="WhiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display=" inline-block"
            borderRadius="full"
            src="/images/takuya.jpg"
            alt="KIM DONG IL"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>Hello Nice to meet you I am dongil kim</Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works/inkdrop">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1991</BioYear>
          Born in Deagu, Korea.
        </BioSection>
        <BioSection>
          <BioYear>2010</BioYear>
          학교를 졸업했다
        </BioSection>
        <BioSection>
          <BioYear>2015</BioYear>
          학교를 졸업했다
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          학교를 졸업했다
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ❤
        </Heading>
        <Paragraph>
          Art, Music, Coffee
          <Link href="https://www.naver.com">Drawing</Link>
          <Link href="https://www.naver.com">Coding</Link>
        </Paragraph>
      </Section>
    </Container>
  )
}

export default Page
