import {
  QuoteCreateInputSchema
} from "./chunk-6EAIMMF7.js";
import {
  QuoteUncheckedCreateInputSchema
} from "./chunk-N7CMDG77.js";
import {
  QuoteUncheckedUpdateInputSchema
} from "./chunk-CKEMCDIF.js";
import {
  QuoteUpdateInputSchema
} from "./chunk-AA42INSK.js";
import {
  QuoteWhereUniqueInputSchema
} from "./chunk-YSPMCR2D.js";

// src/database/outputTypeSchemas/QuoteUpsertArgsSchema.ts
import { z } from "zod";
var QuoteSelectSchema = z.object({
  body: z.boolean().optional(),
  author: z.boolean().optional(),
  source: z.boolean().optional(),
  pinned: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
var QuoteUpsertArgsSchema = z.object({
  select: QuoteSelectSchema.optional(),
  where: QuoteWhereUniqueInputSchema,
  create: z.union([QuoteCreateInputSchema, QuoteUncheckedCreateInputSchema]),
  update: z.union([QuoteUpdateInputSchema, QuoteUncheckedUpdateInputSchema])
}).strict();
var QuoteUpsertArgsSchema_default = QuoteUpsertArgsSchema;

export {
  QuoteSelectSchema,
  QuoteUpsertArgsSchema,
  QuoteUpsertArgsSchema_default
};
//# sourceMappingURL=chunk-FGMSTMFC.js.map