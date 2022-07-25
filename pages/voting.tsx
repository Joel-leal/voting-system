import { Box, Grid } from '@chakra-ui/react';

import Display from '@packages/components/Display';
import VotingInstructions from '@packages/components/VotingInstructions';

import type { NextPage } from 'next';

const VotingPage: NextPage = () => {
  return (
    <Grid templateColumns="2fr 1fr" gap="3" h="100vh" p="10">
      <Display />
      <Box bg="blue" h="100%" boxShadow="dark-lg">
        {' '}
        <VotingInstructions />
      </Box>
    </Grid>
  );
};

export default VotingPage;
