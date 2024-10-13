import {
  AutoSettingOrderByWithRelationInputSchema
} from "./chunk-UY6JO7RD.js";
import {
  AutoSettingScalarFieldEnumSchema
} from "./chunk-HXMUUBV7.js";
import {
  AutoSettingWhereUniqueInputSchema
} from "./chunk-4AABQBWV.js";
import {
  AutoSettingWhereInputSchema
} from "./chunk-I47O5T7B.js";

// src/database/outputTypeSchemas/AutoSettingFindFirstOrThrowArgsSchema.ts
import { z } from "zod";
var AutoSettingSelectSchema = z.object({
  id: z.boolean().optional(),
  type: z.boolean().optional(),
  glob: z.boolean().optional(),
  value: z.boolean().optional()
}).strict();
var AutoSettingFindFirstOrThrowArgsSchema = z.object({
  select: AutoSettingSelectSchema.optional(),
  where: AutoSettingWhereInputSchema.optional(),
  orderBy: z.union([AutoSettingOrderByWithRelationInputSchema.array(), AutoSettingOrderByWithRelationInputSchema]).optional(),
  cursor: AutoSettingWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([AutoSettingScalarFieldEnumSchema, AutoSettingScalarFieldEnumSchema.array()]).optional()
}).strict();
var AutoSettingFindFirstOrThrowArgsSchema_default = AutoSettingFindFirstOrThrowArgsSchema;

export {
  AutoSettingSelectSchema,
  AutoSettingFindFirstOrThrowArgsSchema,
  AutoSettingFindFirstOrThrowArgsSchema_default
};
//# sourceMappingURL=chunk-NKG3Q7Z4.js.map