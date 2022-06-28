import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Box,
  Text,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';

import ConfigForm from '@packages/components/ConfigModal/ConfigForm';
import { IConfigModal, FormState } from '@packages/entities/config-modal';

export default function ConfigModal({ isOpen, onClose }: IConfigModal) {
  const boxBgColor = useColorModeValue('gray.100', 'gray.900');
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

          <Box bgColor={boxBgColor} padding="10px" marginTop="10px">
            <Text fontSize="0.8em">
              {' '}
              Caso ainda não tenha estes dados lembre-se de seguir nosso{' '}
              <Link
                color="teal.500"
                href="https://www.notion.so/podcodar/Docs-7e84b843b0ee496d8f4bf3e59683072a"
              >
                tutorial de setup do projeto
              </Link>
            </Text>
          </Box>
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
