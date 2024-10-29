import path from "path";
import { JsonFile } from "@ulld/utilities/jsonFileClass";
import type { Prisma } from "@ulld/database";
import { prisma } from "@ulld/database";


type WithId<T, J extends string | number = number> = T & { id?: J };

interface BaseAppTestData {
  snippets: WithId<Prisma.SnippetCreateInput>[];
  equations: WithId<Prisma.EquationCreateInput>[];
  ToDoList: Prisma.ToDoListCreateInput[];
  ToDo: Prisma.ToDoCreateArgs["data"][];
}

export const seedTestData = async (): Promise<void> => {
  if (!process.env.ULLD_DEV_ROOT) {
    throw new Error(
      `Cannot find ULLD_DEV_ROOT environment variable. Cannot continue with seedTestData script.`,
    );
  }
  const dataPath = path.join(
    process.env.ULLD_DEV_ROOT,
    "buildUtils/baseAppData.json",
  );
  const jsonFile = new JsonFile(dataPath);
  const content = jsonFile.getJsonContent() as BaseAppTestData;
  await prisma.toDoList.deleteMany({});
  await prisma.toDo.deleteMany({});
  await prisma.equation.deleteMany({});
  await prisma.snippet.deleteMany({});
  for await (const snippet of content.snippets) {
    delete snippet.id;
    await prisma.snippet.create({
      data: snippet,
    });
  }
  for await (const equation of content.equations) {
    delete equation.id;
    await prisma.equation.create({
      data: equation,
    });
  }

  for await (const taskList of content.ToDoList) {
    await prisma.toDoList.create({ data: taskList });
  }

  for await (const task of content.ToDo) {
    await prisma.toDo.create({ data: task });
  }
};
