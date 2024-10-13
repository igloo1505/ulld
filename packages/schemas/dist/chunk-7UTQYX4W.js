import {
  AutoSettingOrderByWithAggregationInputSchema
} from "./chunk-HXR4M3F3.js";
import {
  AutoSettingScalarWhereWithAggregatesInputSchema
} from "./chunk-XWTO772P.js";
import {
  AutoSettingScalarFieldEnumSchema
} from "./chunk-HXMUUBV7.js";
import {
  AutoSettingWhereInputSchema
} from "./chunk-I47O5T7B.js";

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
//# sourceMappingURL=chunk-7UTQYX4W.js.map