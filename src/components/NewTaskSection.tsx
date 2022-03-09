import React from "react";
import { Flex } from "native-base";

import NewTaskButton from "../components/UI/NewTaskButton";
import NewListButton from "../components/UI/NewListButton";

interface Props {}

const NewTaskSection: React.FC<Props> = (props: Props) => {
  function addTaskHandler(): void {
    console.log("new task");
  }

  function AddListHandler(): void {
    console.log("new list");
  }

  return (
    <Flex direction="row" justify="space-between" align="center" px={3}>
      <NewTaskButton onPress={addTaskHandler} />
      <NewListButton onPress={AddListHandler} />
    </Flex>
  );
};

export default NewTaskSection;
