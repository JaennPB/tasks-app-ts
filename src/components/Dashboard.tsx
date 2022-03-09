import React from "react";
import { Text, Flex } from "native-base";

import { Feather } from "@expo/vector-icons";

import moment from "moment";

interface Props {}

const Dashboard: React.FC<Props> = (props: Props) => {
  return (
    <Flex
      flex={1.5}
      px={5}
      py={5}
      borderRadius="lg"
      justify="space-between"
      bg="coolGray.700"
    >
      <Flex direction="row" alignSelf="flex-end" alignItems="center">
        <Text color="lightText" fontSize="4xl" mr={1}>
          Tasks
        </Text>
        <Feather name="check-circle" size={28} color="white" />
      </Flex>
      <Flex>
        <Text color="lightText" fontSize="3xl">
          {moment().format("dddd")}
        </Text>
        <Text color="lightText" fontSize="xl">
          {moment().format("MMMM Do YYYY")}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
