import { Flex, Grid } from '@chakra-ui/react';

export default function Display() {
  return (
    <Grid templateColumns="1fr 1fr" h="80%" alignSelf="center">
      <Flex bg="#FED7D7" h="100%" justifyContent="center" alignItems="center">
        Digit Box
      </Flex>
      <Flex bg="#FEFCBF" h="100%" justifyContent="center" alignItems="center">
        Contender box
      </Flex>
    </Grid>
  );
}
