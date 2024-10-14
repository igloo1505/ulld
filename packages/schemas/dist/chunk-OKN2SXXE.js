import {
  ToDoScalarWhereWithAggregatesInputSchema
} from "./chunk-FBEPLOUP.js";
import {
  ToDoOrderByWithAggregationInputSchema
} from "./chunk-374TGSAE.js";
import {
  ToDoScalarFieldEnumSchema
} from "./chunk-JWOPOQ43.js";
import {
  ToDoWhereInputSchema
} from "./chunk-LSOXTUZL.js";

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
//# sourceMappingURL=chunk-OKN2SXXE.js.map