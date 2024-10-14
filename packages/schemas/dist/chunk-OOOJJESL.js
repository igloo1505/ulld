import {
  QuoteScalarWhereWithAggregatesInputSchema
} from "./chunk-O7FV2D5G.js";
import {
  QuoteOrderByWithAggregationInputSchema
} from "./chunk-UWBRH4NV.js";
import {
  QuoteScalarFieldEnumSchema
} from "./chunk-LGRUCKTG.js";
import {
  QuoteWhereInputSchema
} from "./chunk-BT6JUMEM.js";

// src/database/outputTypeSchemas/QuoteGroupByArgsSchema.ts
import { z } from "zod";
var QuoteGroupByArgsSchema = z.object({
  where: QuoteWhereInputSchema.optional(),
  orderBy: z.union([QuoteOrderByWithAggregationInputSchema.array(), QuoteOrderByWithAggregationInputSchema]).optional(),
  by: QuoteScalarFieldEnumSchema.array(),
  having: QuoteScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var QuoteGroupByArgsSchema_default = QuoteGroupByArgsSchema;

export {
  QuoteGroupByArgsSchema,
  QuoteGroupByArgsSchema_default
};
//# sourceMappingURL=chunk-OOOJJESL.js.map