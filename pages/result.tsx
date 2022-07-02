import { Box, Text } from '@chakra-ui/react';

import ResultDisplay from '@packages/components/ResultDisplay';

import type { NextPage } from 'next';

const ResultPage: NextPage = () => {
  return (
    <Box h="100vh" w="100vw" justifyContent="center" alignItems="center">
      <Text fontSize="30px" textAlign="center" py="3rem">
        {' '}
        Resultado da Votação
      </Text>
      <ResultDisplay />
    </Box>
  );
};

export default ResultPage;