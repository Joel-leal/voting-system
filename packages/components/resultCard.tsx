import { Flex, Box, Avatar, Text } from '@chakra-ui/react';

import type { NextPage } from 'next';

const ResultCard: NextPage = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        mx="50px"
        justifyContent="center"
      >
        <Flex>
          <Box>
            <Avatar src="https://bit.ly/sage-adebayo" />
          </Box>
          <Box ml="3">
            <Text fontWeight="bold">name candidato</Text>
            <Text fontSize="sm">Candidate</Text>
          </Box>
        </Flex>
        <Flex>
          <Box>
            <Avatar src="https://bit.ly/sage-adebayo" />
          </Box>
          <Box ml="3">
            <Text fontWeight="bold">name Vice</Text>
            <Text fontSize="sm">Vice</Text>
          </Box>
        </Flex>
        <Box>
          <Text py="30px">Partido:</Text>
        </Box>
      </Box>
      <Box>
        <Text px="50px" fontSize="30px">
          56%
        </Text>
      </Box>
    </>
  );
};

export default ResultCard;
