import {
  readingListZodObject
} from "./chunk-S4E7CFL7.mjs";
import {
  taggableFields
} from "./chunk-J2GCPJDB.mjs";

// src/api/prismaMdxRelations/taskList/todoList/classProps.ts
import { z } from "zod";
var todoListZodObject = z.object({
  id: z.number().int(),
  label: z.string(),
  tasks: z.any().array().default([])
}).merge(
  readingListZodObject.pick({
    createdAt: true,
    lastUpdate: true
  })
).merge(taggableFields);

export {
  todoListZodObject
};
//# sourceMappingURL=chunk-76DII7K4.mjs.map