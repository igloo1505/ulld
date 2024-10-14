import {
  ToDoListOrderByWithAggregationInputSchema
} from "./chunk-JCHS5IMB.js";
import {
  ToDoListScalarWhereWithAggregatesInputSchema
} from "./chunk-LK6VKYIK.js";
import {
  ToDoListScalarFieldEnumSchema
} from "./chunk-3LVCD5XQ.js";
import {
  ToDoListWhereInputSchema
} from "./chunk-LSOXTUZL.js";

// src/database/outputTypeSchemas/ToDoListGroupByArgsSchema.ts
import { z } from "zod";
var ToDoListGroupByArgsSchema = z.object({
  where: ToDoListWhereInputSchema.optional(),
  orderBy: z.union([ToDoListOrderByWithAggregationInputSchema.array(), ToDoListOrderByWithAggregationInputSchema]).optional(),
  by: ToDoListScalarFieldEnumSchema.array(),
  having: ToDoListScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var ToDoListGroupByArgsSchema_default = ToDoListGroupByArgsSchema;

export {
  ToDoListGroupByArgsSchema,
  ToDoListGroupByArgsSchema_default
};
//# sourceMappingURL=chunk-RLMGECJJ.js.map