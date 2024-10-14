import {
  QuoteOrderByWithRelationInputSchema
} from "./chunk-OMG37DQS.js";
import {
  QuoteScalarFieldEnumSchema
} from "./chunk-LGRUCKTG.js";
import {
  QuoteWhereUniqueInputSchema
} from "./chunk-OQ4XMP32.js";
import {
  QuoteWhereInputSchema
} from "./chunk-BT6JUMEM.js";

// src/database/outputTypeSchemas/QuoteFindManyArgsSchema.ts
import { z } from "zod";
var QuoteSelectSchema = z.object({
  body: z.boolean().optional(),
  author: z.boolean().optional(),
  source: z.boolean().optional(),
  pinned: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
var QuoteFindManyArgsSchema = z.object({
  select: QuoteSelectSchema.optional(),
  where: QuoteWhereInputSchema.optional(),
  orderBy: z.union([QuoteOrderByWithRelationInputSchema.array(), QuoteOrderByWithRelationInputSchema]).optional(),
  cursor: QuoteWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([QuoteScalarFieldEnumSchema, QuoteScalarFieldEnumSchema.array()]).optional()
}).strict();
var QuoteFindManyArgsSchema_default = QuoteFindManyArgsSchema;

export {
  QuoteSelectSchema,
  QuoteFindManyArgsSchema,
  QuoteFindManyArgsSchema_default
};
//# sourceMappingURL=chunk-PVPLIXWF.js.map