import {
  ToDoListOrderByWithAggregationInputSchema
} from "./chunk-AWMLJ2JC.js";
import {
  ToDoListScalarWhereWithAggregatesInputSchema
} from "./chunk-WJDWABYT.js";
import {
  ToDoListScalarFieldEnumSchema
} from "./chunk-6GU2ZBVL.js";
import {
  ToDoListWhereInputSchema
} from "./chunk-XHIJ766H.js";

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
//# sourceMappingURL=chunk-Q4WNTN2Z.js.map