import {
  SettingsAppendixOrderByWithRelationInputSchema
} from "./chunk-AACONCNY.js";
import {
  SettingsAppendixWhereUniqueInputSchema
} from "./chunk-BGFFYPAT.js";
import {
  SettingsAppendixWhereInputSchema
} from "./chunk-KMSRH34U.js";

// src/database/outputTypeSchemas/SettingsAppendixAggregateArgsSchema.ts
import { z } from "zod";
var SettingsAppendixAggregateArgsSchema = z.object({
  where: SettingsAppendixWhereInputSchema.optional(),
  orderBy: z.union([SettingsAppendixOrderByWithRelationInputSchema.array(), SettingsAppendixOrderByWithRelationInputSchema]).optional(),
  cursor: SettingsAppendixWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var SettingsAppendixAggregateArgsSchema_default = SettingsAppendixAggregateArgsSchema;

export {
  SettingsAppendixAggregateArgsSchema,
  SettingsAppendixAggregateArgsSchema_default
};
//# sourceMappingURL=chunk-RLJATMJB.js.map