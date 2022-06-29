import { Box, Text } from '@chakra-ui/react';

interface IPartyInfo {
  candidate?: string;
  vice?: string;
  partido?: string;
}

export default function PartyInfo({ candidate, vice, partido }: IPartyInfo) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      border="2px solid black"
      w="35vw"
      h="35vh"
      justifyContent="center"
      alignItems="left"
    >
      <Box display="flex" marginLeft="10%" py="20px">
        <Text fontWeight="bold" fontSize="20px">
          Candidato: {candidate}
        </Text>
      </Box>
      <Box display="flex" marginLeft="10%">
        <Text fontWeight="bold" fontSize="20px">
          Vice: {vice}
        </Text>
      </Box>
      <Box display="flex" marginLeft="10%" py="20px">
        <Text fontWeight="bold" fontSize="20px">
          Partido: {partido}
        </Text>
      </Box>
    </Box>
  );
}
