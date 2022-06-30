import { Flex, Grid } from '@chakra-ui/react';

// const listCandidate = ['1 colocado', '2 colocado', '3 colocado'];

export default function Display() {
  return (
    <Grid
      templateColumns="3fr"
      h="70vh"
      w="100wh"
      alignSelf="center"
      justifyContent="center"
    >
      {/* {listCandidate.map((position) => {
        <Flex bg="#FED7D7" h="100%" justifyContent="center" alignItems="center">
          {position}
        </Flex>;
      })} */}
      <Flex
        bg="#FED7D7"
        w="50vw"
        h="100%"
        justifyContent="center"
        alignItems="center"
      >
        1 Colocado
      </Flex>
      <Flex bg="#FEFCBF" h="100%" justifyContent="center" alignItems="center">
        2 Colocado
      </Flex>
      <Flex bg="#FED7D7" h="100%" justifyContent="center" alignItems="center">
        3 Colocado
      </Flex>
    </Grid>
  );
}
