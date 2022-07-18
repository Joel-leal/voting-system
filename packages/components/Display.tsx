import { Box, Flex, Grid } from '@chakra-ui/react';
import CandidateCard from './CadidateCard';

import PartyInfo from './PartyInfo';

export default function Display() {
  return (
    <Grid templateColumns="1fr 1fr" h="80%" alignSelf="center">
      <Flex bg="#FED7D7" h="100%" justifyContent="center" alignItems="end">
        <PartyInfo />
      </Flex>
      <Flex
        bg="#FEFCBF"
        h="100%"
        justifyContent="center"
        alignItems="flex-end"
        flexDirection="column"
      >
        <CandidateCard
          size={'140px'}
          margin={'1rem'}
          source={
            'https://static.wixstatic.com/media/0bd8b5_779385fe12ff4155947b97f75533ffb9~mv2.jpg/v1/fill/w_458,h_458,al_c,lg_1,q_80,enc_auto/BONECO%20PARA%20PERFIL.jpg'
          }
        />
        <CandidateCard
          size={'120px'}
          margin={'1.7rem'}
          source={
            'https://static.wixstatic.com/media/0bd8b5_779385fe12ff4155947b97f75533ffb9~mv2.jpg/v1/fill/w_458,h_458,al_c,lg_1,q_80,enc_auto/BONECO%20PARA%20PERFIL.jpg'
          }
        />
      </Flex>
    </Grid>
  );
}
