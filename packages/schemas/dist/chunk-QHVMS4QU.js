import {
  BusinessContactScalarWhereWithAggregatesInputSchema
} from "./chunk-MIDWEJJ4.js";
import {
  BusinessContactOrderByWithAggregationInputSchema
} from "./chunk-YX2HHJRJ.js";
import {
  BusinessContactScalarFieldEnumSchema
} from "./chunk-BJERC5ZI.js";
import {
  BusinessContactWhereInputSchema
} from "./chunk-RT67XEWS.js";

// src/database/outputTypeSchemas/BusinessContactGroupByArgsSchema.ts
import { z } from "zod";
var BusinessContactGroupByArgsSchema = z.object({
  where: BusinessContactWhereInputSchema.optional(),
  orderBy: z.union([BusinessContactOrderByWithAggregationInputSchema.array(), BusinessContactOrderByWithAggregationInputSchema]).optional(),
  by: BusinessContactScalarFieldEnumSchema.array(),
  having: BusinessContactScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var BusinessContactGroupByArgsSchema_default = BusinessContactGroupByArgsSchema;

export {
  BusinessContactGroupByArgsSchema,
  BusinessContactGroupByArgsSchema_default
};
//# sourceMappingURL=chunk-QHVMS4QU.js.map