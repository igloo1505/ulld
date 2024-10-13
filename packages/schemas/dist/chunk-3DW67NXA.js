import {
  QuoteWhereUniqueInputSchema
} from "./chunk-YSPMCR2D.js";

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
//# sourceMappingURL=chunk-3DW67NXA.js.map