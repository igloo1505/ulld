// src/database/inputTypeSchemas/QuoteUncheckedCreateInputSchema.ts
import { z } from "zod";
var QuoteUncheckedCreateInputSchema = z.object({
  body: z.string(),
  author: z.string(),
  source: z.string().optional().nullable(),
  pinned: z.boolean().optional(),
  createdAt: z.coerce.date().optional()
}).strict();
var QuoteUncheckedCreateInputSchema_default = QuoteUncheckedCreateInputSchema;

export {
  QuoteUncheckedCreateInputSchema,
  QuoteUncheckedCreateInputSchema_default
};
//# sourceMappingURL=chunk-G4FY7B4N.js.map