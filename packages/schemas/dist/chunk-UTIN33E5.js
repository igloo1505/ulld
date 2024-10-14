import {
  AutoSettingOrderByWithRelationInputSchema
} from "./chunk-DBH6HSXO.js";
import {
  AutoSettingWhereUniqueInputSchema
} from "./chunk-6BDYKCTD.js";
import {
  AutoSettingWhereInputSchema
} from "./chunk-ZZLVU5LM.js";

// src/database/outputTypeSchemas/AutoSettingAggregateArgsSchema.ts
import { z } from "zod";
var AutoSettingAggregateArgsSchema = z.object({
  where: AutoSettingWhereInputSchema.optional(),
  orderBy: z.union([AutoSettingOrderByWithRelationInputSchema.array(), AutoSettingOrderByWithRelationInputSchema]).optional(),
  cursor: AutoSettingWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var AutoSettingAggregateArgsSchema_default = AutoSettingAggregateArgsSchema;

export {
  AutoSettingAggregateArgsSchema,
  AutoSettingAggregateArgsSchema_default
};
//# sourceMappingURL=chunk-UTIN33E5.js.map