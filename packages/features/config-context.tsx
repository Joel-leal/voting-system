import { useCallback, useState } from 'react';

import { ChildrenProps, ReactEvent } from '@packages/utils/react';
import createCtx from '@packages/utils/createCtx';
import { FormState } from '@packages/entities/config-modal';

interface ConfigActions {
  readonly onConfigChange: (event: ReactEvent) => void;
}

interface ConfigStates {
  readonly electionDatabaseId: string;
  readonly resultsDatabaseId: string;
}

const [useConfigActions, ConfigActionsProvider] =
  createCtx<ConfigActions>('ConfigActionsCtx');
const [useConfigStates, ConfigStatesProvider] =
  createCtx<ConfigStates>('ConfigStatesCtx');

function ConfigProvider({ children }: ChildrenProps) {
  const [formState, setFormState] = useState<FormState>({
    electionDatabaseId: '',
    resultsDatabaseId: '',
  });

  const onConfigChange = useCallback(
    (event: ReactEvent) => {
      setFormState((formState) => ({
        ...formState,
        [event.target.name]: event.target.value,
      }));
    },
    [setFormState],
  );

  const actions: ConfigActions = {
    onConfigChange,
  };

  return (
    <ConfigActionsProvider value={actions}>
      <ConfigStatesProvider value={formState}>{children}</ConfigStatesProvider>
    </ConfigActionsProvider>
  );
}

export default ConfigProvider;
export { useConfigActions, useConfigStates };
