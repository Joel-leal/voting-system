import { Grid } from '@chakra-ui/react';

import Display from '@packages/components/Display';
import InputPanel from '@packages/components/InputPanel';

import type { NextPage } from 'next';

const VotingPage: NextPage = () => {
  return (
    <Grid templateColumns="2fr 1fr" gap="3" h="100vh" p="10">
      <Display />
      <InputPanel />
    </Grid>
  );
};

export default VotingPage;
