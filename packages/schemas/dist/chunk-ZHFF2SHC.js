import {
  QuoteOrderByWithRelationInputSchema
} from "./chunk-74NBKSUY.js";
import {
  QuoteScalarFieldEnumSchema
} from "./chunk-7NHAWYVZ.js";
import {
  QuoteWhereUniqueInputSchema
} from "./chunk-YSPMCR2D.js";
import {
  QuoteWhereInputSchema
} from "./chunk-3OXVABPN.js";

// src/database/outputTypeSchemas/QuoteFindFirstOrThrowArgsSchema.ts
import { z } from "zod";
var QuoteSelectSchema = z.object({
  body: z.boolean().optional(),
  author: z.boolean().optional(),
  source: z.boolean().optional(),
  pinned: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
var QuoteFindFirstOrThrowArgsSchema = z.object({
  select: QuoteSelectSchema.optional(),
  where: QuoteWhereInputSchema.optional(),
  orderBy: z.union([QuoteOrderByWithRelationInputSchema.array(), QuoteOrderByWithRelationInputSchema]).optional(),
  cursor: QuoteWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([QuoteScalarFieldEnumSchema, QuoteScalarFieldEnumSchema.array()]).optional()
}).strict();
var QuoteFindFirstOrThrowArgsSchema_default = QuoteFindFirstOrThrowArgsSchema;

export {
  QuoteSelectSchema,
  QuoteFindFirstOrThrowArgsSchema,
  QuoteFindFirstOrThrowArgsSchema_default
};
//# sourceMappingURL=chunk-ZHFF2SHC.js.map