import { useState } from 'react';
import Head from 'next/head';
import { Heading, Link, Text, Box, Button } from '@chakra-ui/react';

import PartyInfo from '@packages/components/PatyInfo';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  const [candidate, setCandidate] = useState('');

  const changeCandidateName = () => {
    setCandidate('Joel');
  };

  return (
    <Box>
      <Head>
        <title>Creating App of Voting</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box
          w="100%"
          h="80vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDir="column"
        >
          <Heading as="h1" size="2xl" mb="2">
            Welcome to{' '}
            <Link color="teal.500" href="https://nextjs.org">
              Voting-System!
            </Link>
          </Heading>
          <Text>
            This is another a project podCodar{' '}
            <Link
              color="#8e407a"
              href="https://www.notion.so/podcodar/VS-42132534db42406e9e9fe1e6defa0ab9"
            >
              Wiki.
            </Link>
          </Text>
          <PartyInfo candidate={candidate} />
          <Button onClick={changeCandidateName}>Adicionar candidato</Button>
        </Box>
      </main>
    </Box>
  );
};

export default Home;
