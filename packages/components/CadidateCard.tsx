import { Box, Image } from '@chakra-ui/react';

interface CadidateCardProps {
  size: string;
  margin: string;
  source: string;
}

export default function CandidateCard({
  size,
  margin,
  source,
}: CadidateCardProps) {
  return (
    <Box>
      <Image
        borderRadius="full"
        boxSize={size}
        margin={margin}
        src={source}
      ></Image>
    </Box>
  );
}
