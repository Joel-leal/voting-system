import { ChangeEvent } from 'react';

export interface IConfigModal {
  isOpen: boolean;
  onClose: () => void;
}

export interface IConfigForm {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  formState: FormState;
}

export interface FormState {
  notionApiKey: string;
  electionDatabaseId: string;
  resultsDatabaseId: string;
}
