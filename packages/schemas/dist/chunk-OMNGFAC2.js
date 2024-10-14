import {
  DailyFocusOrderByWithRelationInputSchema
} from "./chunk-GDXG4E7J.js";
import {
  DailyFocusScalarFieldEnumSchema
} from "./chunk-CPCBAQ3E.js";
import {
  DailyFocusWhereUniqueInputSchema
} from "./chunk-OFZ4JWLS.js";
import {
  DailyFocusWhereInputSchema
} from "./chunk-COZ5TAGF.js";

// src/database/outputTypeSchemas/DailyFocusFindFirstOrThrowArgsSchema.ts
import { z } from "zod";
var DailyFocusSelectSchema = z.object({
  value: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
var DailyFocusFindFirstOrThrowArgsSchema = z.object({
  select: DailyFocusSelectSchema.optional(),
  where: DailyFocusWhereInputSchema.optional(),
  orderBy: z.union([DailyFocusOrderByWithRelationInputSchema.array(), DailyFocusOrderByWithRelationInputSchema]).optional(),
  cursor: DailyFocusWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([DailyFocusScalarFieldEnumSchema, DailyFocusScalarFieldEnumSchema.array()]).optional()
}).strict();
var DailyFocusFindFirstOrThrowArgsSchema_default = DailyFocusFindFirstOrThrowArgsSchema;

export {
  DailyFocusSelectSchema,
  DailyFocusFindFirstOrThrowArgsSchema,
  DailyFocusFindFirstOrThrowArgsSchema_default
};
//# sourceMappingURL=chunk-OMNGFAC2.js.map