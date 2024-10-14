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

// src/database/outputTypeSchemas/DailyFocusFindFirstArgsSchema.ts
import { z } from "zod";
var DailyFocusSelectSchema = z.object({
  value: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
var DailyFocusFindFirstArgsSchema = z.object({
  select: DailyFocusSelectSchema.optional(),
  where: DailyFocusWhereInputSchema.optional(),
  orderBy: z.union([DailyFocusOrderByWithRelationInputSchema.array(), DailyFocusOrderByWithRelationInputSchema]).optional(),
  cursor: DailyFocusWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([DailyFocusScalarFieldEnumSchema, DailyFocusScalarFieldEnumSchema.array()]).optional()
}).strict();
var DailyFocusFindFirstArgsSchema_default = DailyFocusFindFirstArgsSchema;

export {
  DailyFocusSelectSchema,
  DailyFocusFindFirstArgsSchema,
  DailyFocusFindFirstArgsSchema_default
};
//# sourceMappingURL=chunk-ES2JNQAW.js.map