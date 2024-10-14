import {
  QuoteCreateInputSchema
} from "./chunk-DZY7IR5N.js";
import {
  QuoteUncheckedCreateInputSchema
} from "./chunk-G4FY7B4N.js";
import {
  QuoteUncheckedUpdateInputSchema
} from "./chunk-QDRC663Z.js";
import {
  QuoteUpdateInputSchema
} from "./chunk-U2324CQC.js";
import {
  QuoteWhereUniqueInputSchema
} from "./chunk-OQ4XMP32.js";

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
//# sourceMappingURL=chunk-PPLFARGL.js.map