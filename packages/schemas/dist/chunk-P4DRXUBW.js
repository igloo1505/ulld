import {
  QuoteScalarWhereWithAggregatesInputSchema
} from "./chunk-WJMGN4CX.js";
import {
  QuoteOrderByWithAggregationInputSchema
} from "./chunk-KKBZQLRZ.js";
import {
  QuoteScalarFieldEnumSchema
} from "./chunk-7NHAWYVZ.js";
import {
  QuoteWhereInputSchema
} from "./chunk-3OXVABPN.js";

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
//# sourceMappingURL=chunk-P4DRXUBW.js.map