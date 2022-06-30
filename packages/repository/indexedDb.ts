import Dexie, { Table } from 'dexie';

import { ConfigStates } from '@packages/features/config-context';

export default class VSDatabase extends Dexie {
  configuration!: Table<IConfig, string>;
  votes!: Table<IVotes, number>;

  constructor() {
    super('VSDatabase');

    this.version(1).stores({
      configuration: '&name, value',
      votes: '&id, code ',
    });
  }
}

export interface IConfig {
  name: string;
  value: string;
}

interface IVotes {
  id: number;
  code: number;
  electionId: string;
}

const db = new VSDatabase();

export async function getConfiguration(): Promise<ConfigStates> {
  const [electionDatabaseId, resultsDatabaseId] =
    await db.configuration.bulkGet(['electionDatabaseId', 'resultsDatabaseId']);

  const result = {
    electionDatabaseId: electionDatabaseId?.value || '',
    resultsDatabaseId: resultsDatabaseId?.value || '',
  };

  return result;
}

export async function persistConfiguration(
  configuration: ConfigStates,
): Promise<void> {
  const updateData = Object.entries(configuration).map(
    ([key, value]) =>
      ({
        name: key,
        value: value,
      } as IConfig),
  );

  await db.configuration.bulkPut(updateData);
}
