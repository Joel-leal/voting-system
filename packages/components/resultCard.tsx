import { Flex, Box, Avatar, Text } from '@chakra-ui/react';

import type { NextPage } from 'next';

const ResultCard: NextPage = () => {
  return (
    <>
      <Box display="flex" flexDirection="column" width="50vw" px="2rem">
        <Flex>
          <Box>
            <Avatar src="" />
          </Box>
          <Box mx="0.5rem">
            <Text fontWeight="bold">name candidato</Text>
            <Text fontSize="sm">name vice</Text>
          </Box>
        </Flex>
        <Box py=".5rem">
          <Text>
            <b>Partido: </b>Xablau
          </Text>
        </Box>
      </Box>
      <Box display="flex" justifyContent="end" width="100%">
        <Text fontSize="20px" px="2rem">
          56%
        </Text>
      </Box>
    </>
  );
};

export default ResultCard;
