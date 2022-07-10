import { Flex, Grid, GridItem } from '@chakra-ui/react';

import BaseButton from './BaseButton';

const generateNumberList = (max = 10) => {
  return Array(max)
    .fill(null)
    .map((_, i) => (i + 1) % max);
};

const numericButtons = generateNumberList().map((btnText) => {
  return (
    <GridItem
      key={btnText}
      w="100%"
      h="100%"
      colStart={btnText === 0 ? 2 : undefined}
    >
      <BaseButton
        onClick={() => {}}
        text={btnText.toString()}
        variant="number"
      />
    </GridItem>
  );
});

export default function InputPanel() {
  return (
    <Flex
      h="100%"
      direction="column"
      alignItems="center"
      justifyContent="center"
      px="2"
      backgroundColor="blackAlpha.700"
    >
      <Grid
        templateColumns="repeat(3, 1fr)"
        h="30%"
        w="50%"
        gap="1"
        justifyItems="center"
        alignContent="center"
      >
        {numericButtons}
      </Grid>
      <Flex
        w="80%"
        alignItems="flex-end"
        justifyContent="space-between"
        gap="6"
      >
        <BaseButton onClick={() => {}} text="Branco" variant="blank" />
        <BaseButton onClick={() => {}} text="Corrige" variant="correct" />
        <BaseButton onClick={() => {}} text="Confirma" variant="confirm" />
      </Flex>
    </Flex>
  );
}
