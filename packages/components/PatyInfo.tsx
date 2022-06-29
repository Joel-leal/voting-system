import { Box, Text } from '@chakra-ui/react';

interface IPartyInfo {
  candidate?: string;
}

export default function PartyInfo({ candidate }: IPartyInfo) {
  console.log(`${candidate}`);

  return (
    <Box
      display="flex"
      flexDirection="column"
      border="2px solid black"
      w="50vw"
      h="50vh"
      justifyContent="center"
      alignItems="center"
    >
      <Box display="flex">
        <Text fontStyle="old">Candidate: {candidate}</Text>
      </Box>

      <Box display="flex">
        <Text>Candidate</Text>
      </Box>
    </Box>
  );
}
