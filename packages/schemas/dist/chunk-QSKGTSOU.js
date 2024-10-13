import {
  ToDoListWhereUniqueInputSchema
} from "./chunk-HMQ6R4MC.js";
import {
  ToDoListOrderByWithRelationInputSchema
} from "./chunk-6DB5LE4C.js";
import {
  ToDoListWhereInputSchema
} from "./chunk-XHIJ766H.js";

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
//# sourceMappingURL=chunk-QSKGTSOU.js.map