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
import { useRef, useState } from 'react';

import ConfigForm from '@packages/components/ConfigModal/ConfigForm';
import { IConfigModal, FormState } from '@packages/entities/config-modal';

export default function ConfigModal({ isOpen, onClose }: IConfigModal) {
  const initialRef = useRef(null);
  const boxBgColor = useColorModeValue('gray.100', 'gray.900');
  const [formState, setFormState] = useState<FormState>({
    notionApiKey: '',
    electionDatabaseId: '',
    resultsDatabaseId: '',
  });

  const onSubmmit = () => {
    console.log(formState);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} initialFocusRef={initialRef}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Adicione suas chaves do notion</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <ConfigForm
            setFormState={setFormState}
            formState={formState}
            initialRef={initialRef}
          />

          <Box bgColor={boxBgColor} padding="10px" mt="8">
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
          <Button colorScheme="red" mr="3" onClick={onClose}>
            Fechar
          </Button>
          <Button variant="solid" colorScheme="blue" onClick={onSubmmit}>
            Atualizar dados
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
