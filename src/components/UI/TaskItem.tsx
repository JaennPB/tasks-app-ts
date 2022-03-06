import { Box, Text, Flex } from "native-base";
import React from "react";

import { FontAwesome } from "@expo/vector-icons";

interface Props {}

const TaskItem: React.FC<Props> = (props: Props) => {
  return (
    <Flex direction="row" alignItems="center">
      <FontAwesome name="circle-o" size={20} color="white" />
      <Text color="primary.50" ml={2} fontSize="lg">
        Task 1
      </Text>
    </Flex>
  );
};

export default TaskItem;
