import { FormControl, FormLabel, Input } from '@chakra-ui/react';

import { IConfigForm } from '@packages/entities/config-modal';

export default function ConfigForm({ onChange, formState }: IConfigForm) {
  return (
    <>
      <FormControl>
        <FormLabel fontWeight="bold">Notion API Key</FormLabel>
        <Input
          name="notionApiKey"
          placeholder="Sua chave de integração Notion"
          value={formState.notionApiKey}
          onChange={onChange}
        />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel fontWeight="bold">Eleições Database Id</FormLabel>
        <Input
          name="electionDatabaseId"
          placeholder="Digite o Id do database de eleições"
          value={formState.electionDatabaseId}
          onChange={onChange}
        />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel fontWeight="bold">Resultados Database Id</FormLabel>
        <Input
          name="resultsDatabaseId"
          placeholder="Digite o Id do database de resultados"
          value={formState.resultsDatabaseId}
          onChange={onChange}
        />
      </FormControl>
    </>
  );
}
