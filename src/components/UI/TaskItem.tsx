import React from "react";
import { Text, Flex } from "native-base";

import { Feather } from "@expo/vector-icons";

interface Props {
  title: string;
}

const TaskItem: React.FC<Props> = (props: Props) => {
  return (
    <Flex direction="row" alignItems="center">
      <Feather name="circle" size={18} color="white" />
      <Text color="lightText" ml={2} fontSize="md">
        {props.title}
      </Text>
    </Flex>
  );
};

export default TaskItem;
