import { Box, Text, Center, Container, Flex } from "native-base";
import React from "react";

import Dashboard from "../components/Dashboard";
import AllTasksSection from "../components/AllTasksSection";
import NewTaskSection from "../components/NewTaskSection";

interface Props {}

const MainScreen: React.FC<Props> = (props) => {
  return (
    <Flex flex={1} bg="primary.900" safeArea px={5}>
      <Dashboard />
      <AllTasksSection />
      <NewTaskSection />
    </Flex>
  );
};

export default MainScreen;
