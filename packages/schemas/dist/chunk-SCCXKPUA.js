import {
  ToDoScalarWhereWithAggregatesInputSchema
} from "./chunk-VO5HNHLH.js";
import {
  ToDoOrderByWithAggregationInputSchema
} from "./chunk-C2HIROJH.js";
import {
  ToDoScalarFieldEnumSchema
} from "./chunk-XQBZ7VQK.js";
import {
  ToDoWhereInputSchema
} from "./chunk-XHIJ766H.js";

// src/database/outputTypeSchemas/ToDoGroupByArgsSchema.ts
import { z } from "zod";
var ToDoGroupByArgsSchema = z.object({
  where: ToDoWhereInputSchema.optional(),
  orderBy: z.union([ToDoOrderByWithAggregationInputSchema.array(), ToDoOrderByWithAggregationInputSchema]).optional(),
  by: ToDoScalarFieldEnumSchema.array(),
  having: ToDoScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var ToDoGroupByArgsSchema_default = ToDoGroupByArgsSchema;

export {
  ToDoGroupByArgsSchema,
  ToDoGroupByArgsSchema_default
};
//# sourceMappingURL=chunk-SCCXKPUA.js.map