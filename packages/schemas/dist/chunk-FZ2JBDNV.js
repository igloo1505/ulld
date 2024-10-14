import {
  QuoteOrderByWithRelationInputSchema
} from "./chunk-OMG37DQS.js";
import {
  QuoteWhereUniqueInputSchema
} from "./chunk-OQ4XMP32.js";
import {
  QuoteWhereInputSchema
} from "./chunk-BT6JUMEM.js";

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
//# sourceMappingURL=chunk-FZ2JBDNV.js.map