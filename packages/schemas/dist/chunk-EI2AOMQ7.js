import {
  SettingsAppendixOrderByWithAggregationInputSchema
} from "./chunk-CZI4HRXJ.js";
import {
  SettingsAppendixScalarWhereWithAggregatesInputSchema
} from "./chunk-VZOP4QG7.js";
import {
  SettingsAppendixScalarFieldEnumSchema
} from "./chunk-Q4LGGI3V.js";
import {
  SettingsAppendixWhereInputSchema
} from "./chunk-KMSRH34U.js";

// src/database/outputTypeSchemas/SettingsAppendixGroupByArgsSchema.ts
import { z } from "zod";
var SettingsAppendixGroupByArgsSchema = z.object({
  where: SettingsAppendixWhereInputSchema.optional(),
  orderBy: z.union([SettingsAppendixOrderByWithAggregationInputSchema.array(), SettingsAppendixOrderByWithAggregationInputSchema]).optional(),
  by: SettingsAppendixScalarFieldEnumSchema.array(),
  having: SettingsAppendixScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var SettingsAppendixGroupByArgsSchema_default = SettingsAppendixGroupByArgsSchema;

export {
  SettingsAppendixGroupByArgsSchema,
  SettingsAppendixGroupByArgsSchema_default
};
//# sourceMappingURL=chunk-EI2AOMQ7.js.map