import {
  readingListZodObject
} from "./chunk-I6ZKXDT5.js";
import {
  taggableFields
} from "./chunk-5XGYGHAO.js";

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
//# sourceMappingURL=chunk-BEOSUNHW.js.map