// src/database/modelSchema/QuoteSchema.ts
import { z } from "zod";
var QuoteSchema = z.object({
  body: z.string(),
  author: z.string(),
  source: z.string().nullable(),
  pinned: z.boolean(),
  createdAt: z.coerce.date()
});
var QuotePartialSchema = QuoteSchema.partial();
var QuoteSchema_default = QuoteSchema;

export {
  QuoteSchema,
  QuotePartialSchema,
  QuoteSchema_default
};
//# sourceMappingURL=chunk-JYWGE6LA.js.map