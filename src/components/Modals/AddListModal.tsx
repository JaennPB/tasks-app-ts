import React from "react";
import { Button, Flex, Modal, Text, Input, TextArea } from "native-base";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { openOrCloseAddListModal } from "../../app/slices/uiSlice";

interface Props {}

const AddListModal: React.FC<Props> = (props: Props) => {
  const modalIsOpen = useAppSelector((state) => state.UI.addListModalIsVisible);
  const dispatch = useAppDispatch();

  function closeModalHandler(): void {
    dispatch(openOrCloseAddListModal(false));
  }

  return (
    <Modal isOpen={modalIsOpen} onClose={closeModalHandler}>
      <Modal.Content width="100%" height="100%" bg="coolGray.800">
        <Modal.Header borderBottomWidth={0}>
          <Flex direction="row" align="center" justify="space-between">
            <Button variant="ghost" size="lg">
              Save
            </Button>
            <Text color="lightText" fontSize="lg">
              New List
            </Text>
            <Button onPress={closeModalHandler} variant="ghost" size="lg">
              Cancel
            </Button>
          </Flex>
        </Modal.Header>
        <Modal.Body>
          <Input
            placeholder="Title"
            fontSize="lg"
            mb={5}
            color="lightText"
            bg="coolGray.700"
            borderWidth={0}
          />
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export default AddListModal;
