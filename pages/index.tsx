import { Heading, Box, Flex, Select, Button } from '@chakra-ui/react';
import Head from 'next/head';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Flex h="100vh" w="100vw" alignItems="center" justifyContent="center">
      <Box>
        <Head>
          <title>Eleições 2022</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <Heading as="h1" size="2xl">
            Selecione uma votação{' '}
          </Heading>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="100%"
            py="10px"
          >
            <Select>
              <option value="sexto-ano">Sexto-ano</option>
              <option value="setimo-ano">Sétimo-ano</option>
              <option value="oitavo-ano">Oitavo-ano</option>
              <option value="nono-ano">Nono-ano</option>
            </Select>
            <Button colorScheme="blue" marginLeft="10px">
              Buscar
            </Button>
          </Box>
        </main>
      </Box>
    </Flex>
  );
};

export default Home;
