import React from "react";
import { Flex } from "native-base";

import Dashboard from "../components/Dashboard";
import AllTasksSection from "../components/AllTasksSection";
import NewTaskSection from "../components/NewTaskSection";

interface Props {}

const MainScreen: React.FC<Props> = (props: Props) => {
  return (
    <Flex flex={1} bg="coolGray.800" px={3} safeArea _android={{ py: "5" }}>
      <Dashboard />
      <AllTasksSection />
      <NewTaskSection />
    </Flex>
  );
};

export default MainScreen;
