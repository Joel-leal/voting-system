import { useEffect, useState } from 'react';
import { Heading, Box, Flex, Select, Button } from '@chakra-ui/react';
import Head from 'next/head';

import NavBar from '@packages/components/NavBar';
import { electionsApi } from '@packages/hooks/api';
import { AvaiableElections } from '@packages/entities/notion';
import { useConfigStates } from '@packages/features/config-context';
import { ReactSelectEvent } from '@packages/utils/react';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  const { electionDatabaseId } = useConfigStates();
  const [selectedElectionId, setSelectedElectionId] = useState<string>('');
  const [avaiableElections, setAvaiableElections] = useState<
    AvaiableElections[]
  >([]);

  useEffect(() => {
    async function fetchData() {
      if (electionDatabaseId) {
        const result = await electionsApi.get(electionDatabaseId);
        setAvaiableElections(result.results || []);
      }
    }

    fetchData();
  }, [electionDatabaseId]);

  const handleSelectChage = (event: ReactSelectEvent) => {
    setSelectedElectionId(event?.target?.value);
  };

  const onSubmit = () => {
    console.log(selectedElection);
  };

  const [selectedElection] = avaiableElections?.filter(
    (election) => election.electionId === selectedElectionId,
  );

  return (
    <>
      <NavBar />
      <Flex h="80vh" w="100vw" alignItems="center" justifyContent="center">
        <Box>
          <Head>
            <title>Eleições 2022</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main>
            <Heading as="h1" size="2xl">
              Selecione uma votação{' '}
            </Heading>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              width="100%"
              py="30px"
            >
              <Select
                placeholder="Selecione uma eleição"
                onChange={handleSelectChage}
              >
                {avaiableElections &&
                  avaiableElections.map((voting) => (
                    <option key={voting.electionId} value={voting.electionId}>
                      {voting.electionName} - {voting.position}
                    </option>
                  ))}
              </Select>

              <Button colorScheme="blue" marginLeft="10px" onClick={onSubmit}>
                Iniciar Votação
              </Button>
            </Box>
          </main>
        </Box>
      </Flex>
    </>
  );
};

export default Home;
