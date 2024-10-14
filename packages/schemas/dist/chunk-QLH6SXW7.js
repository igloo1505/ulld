import {
  ToDoOrderByWithRelationInputSchema
} from "./chunk-YIMEHS54.js";
import {
  ToDoWhereUniqueInputSchema
} from "./chunk-H7M4P6XR.js";
import {
  ToDoWhereInputSchema
} from "./chunk-LSOXTUZL.js";

// src/database/outputTypeSchemas/ToDoAggregateArgsSchema.ts
import { z } from "zod";
var ToDoAggregateArgsSchema = z.object({
  where: ToDoWhereInputSchema.optional(),
  orderBy: z.union([ToDoOrderByWithRelationInputSchema.array(), ToDoOrderByWithRelationInputSchema]).optional(),
  cursor: ToDoWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var ToDoAggregateArgsSchema_default = ToDoAggregateArgsSchema;

export {
  ToDoAggregateArgsSchema,
  ToDoAggregateArgsSchema_default
};
//# sourceMappingURL=chunk-QLH6SXW7.js.map