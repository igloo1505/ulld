import {
  BibScalarWhereWithAggregatesInputSchema
} from "./chunk-L4SAOU2V.js";
import {
  BibOrderByWithAggregationInputSchema
} from "./chunk-GBV7FP7Z.js";
import {
  BibScalarFieldEnumSchema
} from "./chunk-G5LILCUI.js";
import {
  BibWhereInputSchema
} from "./chunk-XHIJ766H.js";

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
//# sourceMappingURL=chunk-WTWDSCNH.js.map