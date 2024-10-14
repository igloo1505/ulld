import {
  QuoteCreateInputSchema
} from "./chunk-DZY7IR5N.js";
import {
  QuoteUncheckedCreateInputSchema
} from "./chunk-G4FY7B4N.js";

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
//# sourceMappingURL=chunk-JEZTUW4L.js.map