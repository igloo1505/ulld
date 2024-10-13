import {
  QuoteUncheckedUpdateInputSchema
} from "./chunk-CKEMCDIF.js";
import {
  QuoteUpdateInputSchema
} from "./chunk-AA42INSK.js";
import {
  QuoteWhereUniqueInputSchema
} from "./chunk-YSPMCR2D.js";

// src/database/outputTypeSchemas/QuoteUpdateArgsSchema.ts
import { z } from "zod";
var QuoteSelectSchema = z.object({
  body: z.boolean().optional(),
  author: z.boolean().optional(),
  source: z.boolean().optional(),
  pinned: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
var QuoteUpdateArgsSchema = z.object({
  select: QuoteSelectSchema.optional(),
  data: z.union([QuoteUpdateInputSchema, QuoteUncheckedUpdateInputSchema]),
  where: QuoteWhereUniqueInputSchema
}).strict();
var QuoteUpdateArgsSchema_default = QuoteUpdateArgsSchema;

export {
  QuoteSelectSchema,
  QuoteUpdateArgsSchema,
  QuoteUpdateArgsSchema_default
};
//# sourceMappingURL=chunk-5RIIIBZ3.js.map