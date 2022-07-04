import { useLiveQuery } from 'dexie-react-hooks';
import { useCallback, useEffect, useState } from 'react';

import { ChildrenProps, ReactEvent } from '@packages/utils/react';
import createCtx from '@packages/utils/createCtx';
import { FormState } from '@packages/entities/config-modal';
import { db, getConfiguration } from '@packages/repository/indexedDb';

const defaultInitialState = {
  electionDatabaseId: '',
  resultsDatabaseId: '',
};

interface ConfigActions {
  readonly onConfigChange: (event: ReactEvent) => void;
  readonly updateConfiguration: (payload: ConfigStates) => void;
}

export interface ConfigStates {
  readonly electionDatabaseId: string;
  readonly resultsDatabaseId: string;
}

const [useConfigActions, ConfigActionsProvider] =
  createCtx<ConfigActions>('ConfigActionsCtx');
const [useConfigStates, ConfigStatesProvider] =
  createCtx<ConfigStates>('ConfigStatesCtx');

function ConfigProvider({ children }: ChildrenProps) {
  useEffect(() => {
    async function loadInitialState() {
      const persistedInitialState = await getConfiguration();
      const initialState = persistedInitialState || defaultInitialState;
      setFormState(initialState);
    }

    loadInitialState();
  }, []);

  const configuration = useLiveQuery(
    async () =>
      await db.configuration.bulkGet([
        'electionDatabaseId',
        'resultsDatabaseId',
      ]),
  );

  useEffect(() => {
    console.log(configuration);
  }, [configuration]);

  const [formState, setFormState] = useState<FormState>(defaultInitialState);

  const onConfigChange = useCallback(
    (event: ReactEvent) => {
      setFormState((formState) => ({
        ...formState,
        [event.target.name]: event.target.value,
      }));
    },
    [setFormState],
  );

  const updateConfiguration = useCallback(
    (payload: ConfigStates) => {
      setFormState(payload);
    },
    [setFormState],
  );

  const actions: ConfigActions = {
    onConfigChange,
    updateConfiguration,
  };

  return (
    <ConfigActionsProvider value={actions}>
      <ConfigStatesProvider value={formState}>{children}</ConfigStatesProvider>
    </ConfigActionsProvider>
  );
}

export default ConfigProvider;
export { useConfigActions, useConfigStates };
