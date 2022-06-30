import { Grid, Text } from '@chakra-ui/react';

import ResulData from '@packages/components/ResultData';

import type { NextPage } from 'next';

const ResultPage: NextPage = () => {
  return (
    <Grid h="100vh" w="100vw" justifyContent="center">
      <Text fontSize="30px" textAlign="center" marginTop="100px">
        {' '}
        Resultado da Votação
      </Text>
      <ResulData />
    </Grid>
  );
};

export default ResultPage;
