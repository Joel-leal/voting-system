import { FormLabel, Input } from '@chakra-ui/react';

import { IConfigForm } from '@packages/entities/config-modal';

export default function ConfigForm({ onChange, formState }: IConfigForm) {
  return (
    <>
      <FormLabel fontWeight="bold">Notion API Key</FormLabel>
      <Input
        name="notionApiKey"
        placeholder="Sua chave de integração Notion"
        value={formState.notionApiKey}
        onChange={onChange}
      />

      <FormLabel fontWeight="bold" mt="4">
        Eleições Database Id
      </FormLabel>
      <Input
        name="electionDatabaseId"
        placeholder="Digite o Id do database de eleições"
        value={formState.electionDatabaseId}
        onChange={onChange}
      />

      <FormLabel fontWeight="bold" mt="4">
        Resultados Database Id
      </FormLabel>
      <Input
        name="resultsDatabaseId"
        placeholder="Digite o Id do database de resultados"
        value={formState.resultsDatabaseId}
        onChange={onChange}
      />
    </>
  );
}