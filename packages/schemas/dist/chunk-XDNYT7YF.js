import {
  QuoteOrderByWithRelationInputSchema
} from "./chunk-74NBKSUY.js";
import {
  QuoteWhereUniqueInputSchema
} from "./chunk-YSPMCR2D.js";
import {
  QuoteWhereInputSchema
} from "./chunk-3OXVABPN.js";

// src/database/outputTypeSchemas/QuoteAggregateArgsSchema.ts
import { z } from "zod";
var QuoteAggregateArgsSchema = z.object({
  where: QuoteWhereInputSchema.optional(),
  orderBy: z.union([QuoteOrderByWithRelationInputSchema.array(), QuoteOrderByWithRelationInputSchema]).optional(),
  cursor: QuoteWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var QuoteAggregateArgsSchema_default = QuoteAggregateArgsSchema;

export {
  QuoteAggregateArgsSchema,
  QuoteAggregateArgsSchema_default
};
//# sourceMappingURL=chunk-XDNYT7YF.js.map