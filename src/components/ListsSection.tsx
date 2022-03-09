import React from "react";
import { Flex, Text } from "native-base";

import { useAppSelector } from "../app/hooks";

interface Props {}

const ListsSection: React.FC<Props> = (props: Props) => {
  const lists = useAppSelector((state) => state.main.lists);

  return (
    <Flex direction="row" justify="flex-start" py={3}>
      {lists.map((el) => (
        <Text key={el.name} color="lightText" fontSize="md">
          {el.name}
        </Text>
      ))}
    </Flex>
  );
};

export default ListsSection;
