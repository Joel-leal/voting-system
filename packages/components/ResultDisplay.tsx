import { Box, Flex, Text } from '@chakra-ui/react';

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
      h="50vh"
      w="100wh"
      alignSelf="center"
      justifyContent="center"
      direction="column"
    >
      {positions.map((candidates, index) => (
        <Box
          bg="white"
          w="50vw"
          boxShadow="base"
          h="80%"
          alignItems="center"
          margin="0.5rem"
          key={candidates.candidate}
        >
          <Box
            display="flex"
            bg="while
            "
            w="20%"
            h="100%"
            alignItems="center"
            justifyContent="center"
          >
            <Text color="#A2B5CD" textShadow="2px 1px #CAE1FF" fontSize="25px">
              {index + 1}
            </Text>
          </Box>
        </Box>
      ))}
    </Flex>
  );
}
