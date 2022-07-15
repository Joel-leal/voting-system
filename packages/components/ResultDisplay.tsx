import { Box, Flex, Text } from '@chakra-ui/react';

import ResultCard from './resultCard';

const positions = [
  {
    candidate: 'Daniel Menezes',
    vice: 'Joel Morais',
    partido: 'PCdoB',
    porcentagem: '55%',
    votos: '550',
  },
  {
    candidate: 'Gabriel Amarante',
    vice: 'Érica Poline',
    partido: 'PT',
    porcentagem: '10%',
    votos: '100',
  },
  {
    candidate: 'Lucas Moreira',
    vice: 'Raquel',
    partido: 'Psol',
    porcentagem: '35%',
    votos: '350',
  },
];
export default function ResultDisplay() {
  return (
    <Flex
      w="100wh"
      alignSelf="center"
      justifyContent="center"
      direction="column"
    >
      {positions.map((participant, index) => (
        <Box
          display="flex"
          bg="white"
          w="70vw"
          boxShadow="base"
          alignItems="center"
          key={participant.candidate}
          margin="2rem"
        >
          <Box
            display="flex"
            bg="while
            "
            w="10vw"
            h="100%"
            alignItems="center"
            justifyContent="left"
            padding="2rem"
          >
            <Text color="#A2B5CD" textShadow="2px 1px #CAE1FF" fontSize="25px">
              {index + 1}
            </Text>
          </Box>
          <Box alignItems="center" w="70vw" px="2rem">
            <ResultCard
              candidate={participant.candidate}
              vice={participant.vice}
              party={participant.partido}
              percentagem={participant.porcentagem}
              votos={participant.votos}
            />
          </Box>
        </Box>
      ))}
    </Flex>
  );
}
