import { Heading, Box, Flex, Select } from '@chakra-ui/react';
import Head from 'next/head';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Flex h="100vh" w="100vw" alignItems="center" justifyContent="center">
      <Box>
        <Head>
          <title>Eleições 2018</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <Heading as="h1" size="2xl" mb="2">
            Selecione uma votação{' '}
            <Box>
              <Select>
                <option value="sexto-ano">Sexto-ano</option>
                <option value="setimo-ano">Sétimo-ano</option>
                <option value="oitavo-ano">Oitavo-ano</option>
                <option value="nono-ano">Nono-ano</option>
              </Select>
            </Box>
          </Heading>
        </main>
      </Box>
    </Flex>
  );
};

export default Home;
