import {
  QuoteWhereUniqueInputSchema
} from "./chunk-OQ4XMP32.js";

// src/database/outputTypeSchemas/QuoteFindUniqueArgsSchema.ts
import { z } from "zod";
var QuoteSelectSchema = z.object({
  body: z.boolean().optional(),
  author: z.boolean().optional(),
  source: z.boolean().optional(),
  pinned: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
var QuoteFindUniqueArgsSchema = z.object({
  select: QuoteSelectSchema.optional(),
  where: QuoteWhereUniqueInputSchema
}).strict();
var QuoteFindUniqueArgsSchema_default = QuoteFindUniqueArgsSchema;

export {
  QuoteSelectSchema,
  QuoteFindUniqueArgsSchema,
  QuoteFindUniqueArgsSchema_default
};
//# sourceMappingURL=chunk-L7RS63UC.js.map