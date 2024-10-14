import {
  todoListZodObject
} from "./chunk-DGXESPMP.js";
import {
  taggableFields
} from "./chunk-5XGYGHAO.js";
import {
  dateTimeStringTransform
} from "./chunk-YVRRK3PZ.js";

// src/api/prismaMdxRelations/taskList/todo/classProps.ts
import { z } from "zod";
import { toDoItemStatuses } from "@ulld/utilities/toDoStatusData";
import { TaskCategory } from "@ulld/database/internalDatabaseTypes";
var todoTaskZodObject = z.object({
  id: z.number().int(),
  createdAt: z.union([z.string().datetime(), z.date()]).nullish().transform(dateTimeStringTransform),
  task: z.string(),
  dueAt: z.union([z.string().datetime(), z.date()]).nullish().transform(dateTimeStringTransform),
  details: z.string().nullish(),
  associatedNotes: z.any().array().default([]),
  parentId: z.number().int().nullish(),
  category: z.nativeEnum(TaskCategory),
  bookmarked: z.boolean().default(false),
  status: z.enum(toDoItemStatuses),
  priority: z.number().min(0).max(10),
  parent: z.any().nullish().default(null),
  child: z.any().nullish().default(null),
  ToDoList: todoListZodObject,
  toDoListId: z.number().int()
}).merge(taggableFields);

export {
  todoTaskZodObject
};
//# sourceMappingURL=chunk-E2RAG7YE.js.map