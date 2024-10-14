import {
  QuoteWhereUniqueInputSchema
} from "./chunk-OQ4XMP32.js";

// src/database/outputTypeSchemas/QuoteDeleteArgsSchema.ts
import { z } from "zod";
var QuoteSelectSchema = z.object({
  body: z.boolean().optional(),
  author: z.boolean().optional(),
  source: z.boolean().optional(),
  pinned: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
var QuoteDeleteArgsSchema = z.object({
  select: QuoteSelectSchema.optional(),
  where: QuoteWhereUniqueInputSchema
}).strict();
var QuoteDeleteArgsSchema_default = QuoteDeleteArgsSchema;

export {
  QuoteSelectSchema,
  QuoteDeleteArgsSchema,
  QuoteDeleteArgsSchema_default
};
//# sourceMappingURL=chunk-AHXCKQL2.js.map