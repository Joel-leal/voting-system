import { Flex, Grid } from '@chakra-ui/react';

import ResultCard from './resultCard';

const positions = ['candidate1', 'candidate2', 'candidate3'];

export default function ResultDisplay() {
  return (
    <Grid h="50vh" w="100wh" alignSelf="center" justifyContent="center">
      {positions.map((candidate, index) => (
        <Flex
          bg="#FED7D7"
          w="50vw"
          h="80%"
          alignItems="center"
          key={candidate[index]}
        >
          <Flex
            bg="#FEFCBF"
            w="20%"
            h="100%"
            alignItems="center"
            justifyContent="center"
          >
            {index + 1}
          </Flex>
          <ResultCard />
        </Flex>
      ))}
    </Grid>
  );
}
