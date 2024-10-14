import {
  QuoteUncheckedUpdateInputSchema
} from "./chunk-QDRC663Z.js";
import {
  QuoteUpdateInputSchema
} from "./chunk-U2324CQC.js";
import {
  QuoteWhereUniqueInputSchema
} from "./chunk-OQ4XMP32.js";

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
//# sourceMappingURL=chunk-WUAWK6JS.js.map