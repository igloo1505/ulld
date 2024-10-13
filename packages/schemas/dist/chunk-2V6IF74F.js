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

// src/database/outputTypeSchemas/AutoSettingFindFirstArgsSchema.ts
import { z } from "zod";
var AutoSettingSelectSchema = z.object({
  id: z.boolean().optional(),
  type: z.boolean().optional(),
  glob: z.boolean().optional(),
  value: z.boolean().optional()
}).strict();
var AutoSettingFindFirstArgsSchema = z.object({
  select: AutoSettingSelectSchema.optional(),
  where: AutoSettingWhereInputSchema.optional(),
  orderBy: z.union([AutoSettingOrderByWithRelationInputSchema.array(), AutoSettingOrderByWithRelationInputSchema]).optional(),
  cursor: AutoSettingWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([AutoSettingScalarFieldEnumSchema, AutoSettingScalarFieldEnumSchema.array()]).optional()
}).strict();
var AutoSettingFindFirstArgsSchema_default = AutoSettingFindFirstArgsSchema;

export {
  AutoSettingSelectSchema,
  AutoSettingFindFirstArgsSchema,
  AutoSettingFindFirstArgsSchema_default
};
//# sourceMappingURL=chunk-2V6IF74F.js.map