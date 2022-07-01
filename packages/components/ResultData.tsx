import { Flex, Grid } from '@chakra-ui/react';

import ResultCard from './resultCard';

// const listCandidate = ['1 colocado', '2 colocado', '3 colocado'];

export default function ResultData() {
  return (
    <Grid
      templateColumns="3fr"
      h="70vh"
      w="100wh"
      alignSelf="center"
      justifyContent="center"
    >
      <Flex bg="#FED7D7" w="50vw" h="100%" alignItems="center">
        <Flex
          bg="#FEFCBF"
          w="20%"
          h="100%"
          alignItems="center"
          justifyContent="center"
        >
          1
        </Flex>
        <ResultCard />
      </Flex>
      <Flex bg="#FED7D7" w="50vw" h="100%" alignItems="center">
        <Flex
          bg="#FEFCBF"
          w="20%"
          h="100%"
          alignItems="center"
          justifyContent="center"
        >
          2
        </Flex>
        <ResultCard />
      </Flex>
    </Grid>
  );
}
