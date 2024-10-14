import {
  BibEntryOrderByWithAggregationInputSchema
} from "./chunk-NI2LHRXJ.js";
import {
  BibEntryScalarWhereWithAggregatesInputSchema
} from "./chunk-FMCMWOI4.js";
import {
  BibEntryScalarFieldEnumSchema
} from "./chunk-RYBL3VGK.js";
import {
  BibEntryWhereInputSchema
} from "./chunk-LSOXTUZL.js";

// src/database/outputTypeSchemas/BibEntryGroupByArgsSchema.ts
import { z } from "zod";
var BibEntryGroupByArgsSchema = z.object({
  where: BibEntryWhereInputSchema.optional(),
  orderBy: z.union([BibEntryOrderByWithAggregationInputSchema.array(), BibEntryOrderByWithAggregationInputSchema]).optional(),
  by: BibEntryScalarFieldEnumSchema.array(),
  having: BibEntryScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var BibEntryGroupByArgsSchema_default = BibEntryGroupByArgsSchema;

export {
  BibEntryGroupByArgsSchema,
  BibEntryGroupByArgsSchema_default
};
//# sourceMappingURL=chunk-O5BCOHP5.js.map