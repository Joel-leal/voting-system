import { Dispatch, LegacyRef, SetStateAction } from 'react';

export interface IConfigModal {
  isOpen: boolean;
  onClose: () => void;
}

export interface IConfigForm {
  setFormState: Dispatch<SetStateAction<FormState>>;
  formState: FormState;
  initialRef: LegacyRef<HTMLInputElement>;
}

export interface FormState {
  notionApiKey: string;
  electionDatabaseId: string;
  resultsDatabaseId: string;
}
