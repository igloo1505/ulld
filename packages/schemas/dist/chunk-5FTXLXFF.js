import {
  ToDoOrderByWithRelationInputSchema
} from "./chunk-7XO7TOEK.js";
import {
  ToDoWhereUniqueInputSchema
} from "./chunk-7WISUQHK.js";
import {
  ToDoWhereInputSchema
} from "./chunk-XHIJ766H.js";

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
//# sourceMappingURL=chunk-5FTXLXFF.js.map