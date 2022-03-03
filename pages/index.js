import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
} from '@chakra-ui/react'

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
    </Container>
  )
}

export default Page
