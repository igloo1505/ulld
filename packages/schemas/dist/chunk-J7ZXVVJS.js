import {
  ToDoListWhereUniqueInputSchema
} from "./chunk-UYCDM7HT.js";
import {
  ToDoListOrderByWithRelationInputSchema
} from "./chunk-BL3DWYYH.js";
import {
  ToDoListWhereInputSchema
} from "./chunk-LSOXTUZL.js";

// src/database/outputTypeSchemas/ToDoListAggregateArgsSchema.ts
import { z } from "zod";
var ToDoListAggregateArgsSchema = z.object({
  where: ToDoListWhereInputSchema.optional(),
  orderBy: z.union([ToDoListOrderByWithRelationInputSchema.array(), ToDoListOrderByWithRelationInputSchema]).optional(),
  cursor: ToDoListWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var ToDoListAggregateArgsSchema_default = ToDoListAggregateArgsSchema;

export {
  ToDoListAggregateArgsSchema,
  ToDoListAggregateArgsSchema_default
};
//# sourceMappingURL=chunk-J7ZXVVJS.js.map