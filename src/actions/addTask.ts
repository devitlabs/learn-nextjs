import { prismaClient } from "@/app/prisma";
import { revalidatePath } from "next/cache";

export const addTask = async (formData: FormData) => {
  "use server";
  const taskItem = formData.get("taskItem");
  console.log(`${taskItem}`);
  await prismaClient.task.create({
    data: {
      task: `${taskItem}`,
    },
  });
  revalidatePath("/");
};
