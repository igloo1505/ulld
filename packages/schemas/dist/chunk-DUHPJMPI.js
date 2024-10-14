import {
  BibScalarWhereWithAggregatesInputSchema
} from "./chunk-R7OBII23.js";
import {
  BibOrderByWithAggregationInputSchema
} from "./chunk-HVWRAQPZ.js";
import {
  BibScalarFieldEnumSchema
} from "./chunk-GAGYE6VK.js";
import {
  BibWhereInputSchema
} from "./chunk-LSOXTUZL.js";

// src/database/outputTypeSchemas/BibGroupByArgsSchema.ts
import { z } from "zod";
var BibGroupByArgsSchema = z.object({
  where: BibWhereInputSchema.optional(),
  orderBy: z.union([BibOrderByWithAggregationInputSchema.array(), BibOrderByWithAggregationInputSchema]).optional(),
  by: BibScalarFieldEnumSchema.array(),
  having: BibScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var BibGroupByArgsSchema_default = BibGroupByArgsSchema;

export {
  BibGroupByArgsSchema,
  BibGroupByArgsSchema_default
};
//# sourceMappingURL=chunk-DUHPJMPI.js.map