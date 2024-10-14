import {
  AutoSettingOrderByWithAggregationInputSchema
} from "./chunk-LMNQBKUL.js";
import {
  AutoSettingScalarWhereWithAggregatesInputSchema
} from "./chunk-PIVMVVKP.js";
import {
  AutoSettingScalarFieldEnumSchema
} from "./chunk-JCUVCERX.js";
import {
  AutoSettingWhereInputSchema
} from "./chunk-ZZLVU5LM.js";

// src/database/outputTypeSchemas/AutoSettingGroupByArgsSchema.ts
import { z } from "zod";
var AutoSettingGroupByArgsSchema = z.object({
  where: AutoSettingWhereInputSchema.optional(),
  orderBy: z.union([AutoSettingOrderByWithAggregationInputSchema.array(), AutoSettingOrderByWithAggregationInputSchema]).optional(),
  by: AutoSettingScalarFieldEnumSchema.array(),
  having: AutoSettingScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var AutoSettingGroupByArgsSchema_default = AutoSettingGroupByArgsSchema;

export {
  AutoSettingGroupByArgsSchema,
  AutoSettingGroupByArgsSchema_default
};
//# sourceMappingURL=chunk-5C5Y3D2H.js.map