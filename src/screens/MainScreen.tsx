import React from "react";
import { Flex } from "native-base";

import Dashboard from "../components/Dashboard";
import AllTasksSection from "../components/AllTasksSection";
import ControlsSection from "../components/ControlsSection";
import AddListModal from "../components/Modals/AddListModal";
import AddTasModal from "../components/Modals/AddTaskModal";

interface Props {}

const MainScreen: React.FC<Props> = (props: Props) => {
  return (
    <Flex flex={1} bg="coolGray.800" px={3} safeArea _android={{ py: "5" }}>
      <Dashboard />
      <AllTasksSection />
      <ControlsSection />
      <AddListModal />
      <AddTasModal />
    </Flex>
  );
};

export default MainScreen;
