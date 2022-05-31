import Head from 'next/head'
import { Heading, Link, Text, Box } from '@chakra-ui/core'


import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>Creating App of Voting</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Heading as="h1" size="2xl" mb="2">
          Welcome to <Link color="teal.500" href="https://nextjs.org">Voting-System!</Link>
        </Heading>
        <Text>
          This is another a project podCodar{' '}
          <Link color="#8e407a" href="https://www.notion.so/podcodar/VS-42132534db42406e9e9fe1e6defa0ab9">Wiki.</Link>
        </Text>
      </main>
    </Box>
  )
}
