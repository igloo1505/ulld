import {
  QuoteWhereUniqueInputSchema
} from "./chunk-OQ4XMP32.js";

// src/database/outputTypeSchemas/QuoteFindUniqueOrThrowArgsSchema.ts
import { z } from "zod";
var QuoteSelectSchema = z.object({
  body: z.boolean().optional(),
  author: z.boolean().optional(),
  source: z.boolean().optional(),
  pinned: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
var QuoteFindUniqueOrThrowArgsSchema = z.object({
  select: QuoteSelectSchema.optional(),
  where: QuoteWhereUniqueInputSchema
}).strict();
var QuoteFindUniqueOrThrowArgsSchema_default = QuoteFindUniqueOrThrowArgsSchema;

export {
  QuoteSelectSchema,
  QuoteFindUniqueOrThrowArgsSchema,
  QuoteFindUniqueOrThrowArgsSchema_default
};
//# sourceMappingURL=chunk-TA7NR7IJ.js.map