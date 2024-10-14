import {
  BusinessContactScalarWhereWithAggregatesInputSchema
} from "./chunk-AJBC5AAB.js";
import {
  BusinessContactOrderByWithAggregationInputSchema
} from "./chunk-BTGDEAK6.js";
import {
  BusinessContactScalarFieldEnumSchema
} from "./chunk-G5FF5Q2V.js";
import {
  BusinessContactWhereInputSchema
} from "./chunk-4TBUKZ6H.js";

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
//# sourceMappingURL=chunk-FCOXVYEV.js.map