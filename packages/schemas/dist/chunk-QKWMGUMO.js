import {
  AutoSettingOrderByWithRelationInputSchema
} from "./chunk-DBH6HSXO.js";
import {
  AutoSettingScalarFieldEnumSchema
} from "./chunk-JCUVCERX.js";
import {
  AutoSettingWhereUniqueInputSchema
} from "./chunk-6BDYKCTD.js";
import {
  AutoSettingWhereInputSchema
} from "./chunk-ZZLVU5LM.js";

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
//# sourceMappingURL=chunk-QKWMGUMO.js.map