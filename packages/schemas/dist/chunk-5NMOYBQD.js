import {
  QuoteCreateInputSchema
} from "./chunk-6EAIMMF7.js";
import {
  QuoteUncheckedCreateInputSchema
} from "./chunk-N7CMDG77.js";

// src/database/outputTypeSchemas/QuoteCreateArgsSchema.ts
import { z } from "zod";
var QuoteSelectSchema = z.object({
  body: z.boolean().optional(),
  author: z.boolean().optional(),
  source: z.boolean().optional(),
  pinned: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
var QuoteCreateArgsSchema = z.object({
  select: QuoteSelectSchema.optional(),
  data: z.union([QuoteCreateInputSchema, QuoteUncheckedCreateInputSchema])
}).strict();
var QuoteCreateArgsSchema_default = QuoteCreateArgsSchema;

export {
  QuoteSelectSchema,
  QuoteCreateArgsSchema,
  QuoteCreateArgsSchema_default
};
//# sourceMappingURL=chunk-5NMOYBQD.js.map