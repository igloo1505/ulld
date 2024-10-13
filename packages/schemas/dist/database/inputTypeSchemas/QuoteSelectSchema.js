// src/database/inputTypeSchemas/QuoteSelectSchema.ts
import { z } from "zod";
var QuoteSelectSchema = z.object({
  body: z.boolean().optional(),
  author: z.boolean().optional(),
  source: z.boolean().optional(),
  pinned: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
var QuoteSelectSchema_default = QuoteSelectSchema;
export {
  QuoteSelectSchema,
  QuoteSelectSchema_default as default
};
//# sourceMappingURL=QuoteSelectSchema.js.map