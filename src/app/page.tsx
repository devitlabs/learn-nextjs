import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import TaskCard from "./TaskCard";
import { prismaClient } from "./prisma";
import { addTask } from "@/actions/addTask";

type Task = {
  id: number;
  task: string;
  createdDate: Date;
};

export default async function Home() {
  const tasks = await prismaClient.task.findMany({
    orderBy: {
      createdDate: "desc",
    },
  });

  function handleDisplayTasksList(task: Task, index: number) {
    return <TaskCard key={task.id} taskId={task.id} task={task.task} />;
  }

  return (
    <Box>
      <VStack>
        <Box maxW="700">
          <form action={addTask}>
            <FormControl>
              <FormLabel as="h1" fontSize="30px">
                Ajouter une nouvelle Task{" "}
              </FormLabel>
              <HStack spacing={4}>
                <Input
                  required
                  type="text"
                  id="taskItem"
                  name="taskItem"
                ></Input>
                <Button type="submit" width="100px" colorScheme="blue">
                  Ajouter
                </Button>
              </HStack>
            </FormControl>
          </form>
          {tasks.map(handleDisplayTasksList)}
        </Box>
      </VStack>
    </Box>
  );
}
