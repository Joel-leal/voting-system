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
  useToast,
} from '@chakra-ui/react';
import { useRef } from 'react';

import ConfigForm from '@packages/components/ConfigModal/ConfigForm';
import { IConfigModal } from '@packages/entities/config-modal';
import {
  useConfigActions,
  useConfigStates,
} from '@packages/features/config-context';
import {
  getConfiguration,
  putConfiguration,
} from '@packages/repository/indexedDb';
import { updateConfigurationSuccess } from '@packages/utils/toast-configs';

export default function ConfigModal({ isOpen, onClose }: IConfigModal) {
  const toast = useToast();
  const initialRef = useRef(null);
  const formState = useConfigStates();
  const { updateConfiguration } = useConfigActions();
  const boxBgColor = useColorModeValue('gray.100', 'gray.900');

  const updateContext = async () => {
    const persistedConfig = await getConfiguration();
    if (persistedConfig != formState) {
      updateConfiguration(persistedConfig);
    }
  };

  const onSubmmit = async () => {
    await putConfiguration(formState);
    toast(updateConfigurationSuccess);
    onClose();
  };

  const onCloseModal = async () => {
    await updateContext();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onCloseModal} initialFocusRef={initialRef}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Adicione suas chaves do notion</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <ConfigForm initialRef={initialRef} />

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
          <Button colorScheme="red" mr="3" onClick={onCloseModal}>
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
