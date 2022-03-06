import { Box, Flex, Text, Button } from "native-base";
import React from "react";

import NewTaskButton from "../components/UI/NewTaskButton";
import NewListButton from "../components/UI/NewListButton";

interface Props {}

const NewTaskSection: React.FC<Props> = (props) => {
  function addTaskHandler(): void {
    console.log("new task");
  }

  function AddListHandler(): void {
    console.log("new list");
  }

  return (
    <Flex
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      px={3}
    >
      <NewTaskButton onPress={addTaskHandler} />
      <NewListButton onPress={AddListHandler} />
    </Flex>
  );
};

export default NewTaskSection;
