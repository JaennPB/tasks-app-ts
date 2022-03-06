import { Box, Text, Flex } from "native-base";
import React from "react";

import TaskItem from "../components/UI/TaskItem";

interface Props {}

const AllTasksSection: React.FC<Props> = (props) => {
  return (
    <Flex bg="primary.800" borderRadius={5} px={5} py={5} flex={5} my={5}>
      <TaskItem />
    </Flex>
  );
};

export default AllTasksSection;
