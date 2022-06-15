import { Heading, Box, Flex, Select } from '@chakra-ui/react';
import Head from 'next/head';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Flex h='100vh' w='100vw' alignItems='center' justifyContent='center' >
      <Box >
        <Head>
          <title>Eleições 2018</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <Heading as="h1" size="2xl" mb="2">
            Selecione a turma de votação{' '}
            <Select>
            <option value='option1'>Sexto-ano</option>
            <option value='option2'>Sétimo-ano</option>
            <option value='option3'>Oitavo-ano</option>
            <option value='option3'>Nono-ano</option>
          </Select>
          </Heading>
        </main>
      </Box>
    </Flex>
  );
};

export default Home;
