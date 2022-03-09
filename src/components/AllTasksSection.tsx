import React from "react";
import { Flex, Divider } from "native-base";

import TaskItem from "./UI/TaskItem";
import ListsSection from "./ListsSection";

import { useAppSelector } from "../app/hooks";

interface Props {}

const AllTasksSection: React.FC<Props> = (props: Props) => {
  const currentList = useAppSelector((state) => state.main.currentList);
  const allLists = useAppSelector((state) => state.main.lists);
  const currentTasksByList = allLists.find((list) => list.name === currentList);

  return (
    <Flex
      flex={6}
      borderRadius="lg"
      px={5}
      pb={5}
      my={5}
      bg="coolGray.700"
      _android={{ flex: "5" }}
    >
      <ListsSection />
      <Divider mb={3} thickness={0.5} />
      {currentTasksByList?.uncompleted.map((task) => (
        <TaskItem key={task} title={task} />
      ))}
    </Flex>
  );
};

export default AllTasksSection;
