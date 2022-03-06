import { Pressable, Flex, Text } from "native-base";
import React from "react";

import { MaterialIcons } from "@expo/vector-icons";

interface Props {
  onPress: () => void;
}

const NewTaskButton: React.FC<Props> = (props) => {
  return (
    <Pressable onPress={props.onPress}>
      <Flex direction="row" alignItems="center">
        <MaterialIcons name="featured-play-list" size={24} color="white" />
        <Text ml={2} color="white" fontSize="lg">
          New List
        </Text>
      </Flex>
    </Pressable>
  );
};

export default NewTaskButton;