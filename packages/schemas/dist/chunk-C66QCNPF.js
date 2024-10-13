import {
  SettingsAppendixOrderByWithAggregationInputSchema
} from "./chunk-2PI7HHEE.js";
import {
  SettingsAppendixScalarWhereWithAggregatesInputSchema
} from "./chunk-5J3HUPBV.js";
import {
  SettingsAppendixScalarFieldEnumSchema
} from "./chunk-ESW63JLV.js";
import {
  SettingsAppendixWhereInputSchema
} from "./chunk-O6RAGOPN.js";

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
//# sourceMappingURL=chunk-C66QCNPF.js.map