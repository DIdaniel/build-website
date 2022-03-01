import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderradius="lg" bg="red" p={3} align="center">
        Hello, I&apos;m a frontend developer based in Seoul, Korea!😎
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            KIM DONG IL
          </Heading>
          <p>Digital Cratfzman ( Artist / Developer / Designer )</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
