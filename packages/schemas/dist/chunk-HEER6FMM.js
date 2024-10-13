import {
  BibEntryOrderByWithAggregationInputSchema
} from "./chunk-PG67K73G.js";
import {
  BibEntryScalarWhereWithAggregatesInputSchema
} from "./chunk-GAXJGSDI.js";
import {
  BibEntryScalarFieldEnumSchema
} from "./chunk-PRFRUNA7.js";
import {
  BibEntryWhereInputSchema
} from "./chunk-XHIJ766H.js";

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
//# sourceMappingURL=chunk-HEER6FMM.js.map