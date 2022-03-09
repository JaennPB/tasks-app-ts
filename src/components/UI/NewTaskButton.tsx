import React from "react";
import { Pressable, Flex, Text } from "native-base";

import { MaterialCommunityIcons } from "@expo/vector-icons";

interface Props {
  onPress: () => void;
}

const NewTaskButton: React.FC<Props> = (props: Props) => {
  return (
    <Pressable onPress={props.onPress}>
      <Flex direction="row" align="center">
        <MaterialCommunityIcons
          name="plus-circle-outline"
          size={24}
          color="white"
        />
        <Text ml={2} color="lightText" fontSize="lg">
          New task
        </Text>
      </Flex>
    </Pressable>
  );
};

export default NewTaskButton;
