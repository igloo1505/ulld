// src/database/inputTypeSchemas/QuoteCreateInputSchema.ts
import { z } from "zod";
var QuoteCreateInputSchema = z.object({
  body: z.string(),
  author: z.string(),
  source: z.string().optional().nullable(),
  pinned: z.boolean().optional(),
  createdAt: z.coerce.date().optional()
}).strict();
var QuoteCreateInputSchema_default = QuoteCreateInputSchema;

export {
  QuoteCreateInputSchema,
  QuoteCreateInputSchema_default
};
//# sourceMappingURL=chunk-6EAIMMF7.js.map