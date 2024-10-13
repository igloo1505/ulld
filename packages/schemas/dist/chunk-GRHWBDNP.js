import {
  DailyFocusOrderByWithRelationInputSchema
} from "./chunk-QOXHHMBW.js";
import {
  DailyFocusScalarFieldEnumSchema
} from "./chunk-RKTGUIGE.js";
import {
  DailyFocusWhereUniqueInputSchema
} from "./chunk-BZDWBW7V.js";
import {
  DailyFocusWhereInputSchema
} from "./chunk-I36SKJDA.js";

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
//# sourceMappingURL=chunk-GRHWBDNP.js.map