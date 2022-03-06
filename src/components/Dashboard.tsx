import { Box, Text, Flex } from "native-base";
import React from "react";

import { Feather } from "@expo/vector-icons";

import moment from "moment";

interface Props {}

const Dashboard: React.FC<Props> = (props) => {
  return (
    <Flex
      bg="primary.800"
      borderRadius={5}
      px={5}
      py={5}
      flex={1.5}
      justifyContent="space-between"
    >
      <Flex direction="row" alignSelf="flex-end" alignItems="center">
        <Text color="primary.50" fontSize="4xl" mr={1}>
          Tasks
        </Text>
        <Feather name="check-circle" size={28} color="white" />
      </Flex>
      <Flex>
        <Text color="primary.50" fontSize="3xl">
          {moment().format("dddd")}
        </Text>
        <Text color="primary.50" fontSize="xl">
          {moment().format("MMMM Do YYYY")}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
