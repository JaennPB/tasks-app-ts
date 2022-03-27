import React from "react";
import { Flex } from "native-base";

import NewTaskButton from "../components/UI/NewTaskButton";
import NewListButton from "../components/UI/NewListButton";

import { useAppDispatch } from "../app/hooks";
import {
  openOrCloseAddListModal,
  openOrCloseAddTaskModal,
} from "../app/slices/uiSlice";

interface Props {}

const NewTaskSection: React.FC<Props> = (props: Props) => {
  const dispatch = useAppDispatch();

  function addTaskHandler(): void {
    dispatch(openOrCloseAddTaskModal(true));
  }

  function AddListHandler(): void {
    dispatch(openOrCloseAddListModal(true));
  }

  return (
    <Flex direction="row" justify="space-between" align="center" px={3}>
      <NewTaskButton onPress={addTaskHandler} />
      <NewListButton onPress={AddListHandler} />
    </Flex>
  );
};

export default NewTaskSection;
