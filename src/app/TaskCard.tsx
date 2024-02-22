import React from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";

type TaskProps = {
  taskId: number;
  task: String;
};

function TaskCard({ taskId, task }: TaskProps) {
  return (
    <HStack mt="4" justifyContent="space-between">
      <HStack>
        <Checkbox size="lg"></Checkbox>
        <Text>
          {taskId} - {task}
        </Text>
      </HStack>
      <Button colorScheme="red">Delete</Button>
    </HStack>
  );
}

export default TaskCard;
