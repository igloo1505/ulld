// src/database/inputTypeSchemas/QuoteCreateManyInputSchema.ts
import { z } from "zod";
var QuoteCreateManyInputSchema = z.object({
  body: z.string(),
  author: z.string(),
  source: z.string().optional().nullable(),
  pinned: z.boolean().optional(),
  createdAt: z.coerce.date().optional()
}).strict();
var QuoteCreateManyInputSchema_default = QuoteCreateManyInputSchema;

export {
  QuoteCreateManyInputSchema,
  QuoteCreateManyInputSchema_default
};
//# sourceMappingURL=chunk-ZT354ONR.js.map