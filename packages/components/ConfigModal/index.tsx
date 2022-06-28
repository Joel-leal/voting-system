import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';

import ConfigForm from '@packages/components/ConfigModal/ConfigForm';
import { IConfigModal, FormState } from '@packages/entities/config-modal';

export default function ConfigModal({ isOpen, onClose }: IConfigModal) {
  const [formState, setFormState] = useState<FormState>({
    notionApiKey: '',
    electionDatabaseId: '',
    resultsDatabaseId: '',
  });

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmmit = () => {
    console.log(formState);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Adicione suas chaves do notion</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <ConfigForm onChange={onChangeInput} formState={formState} />
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="red" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="solid" colorScheme="blue" onClick={onSubmmit}>
            Atualizar dados
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
