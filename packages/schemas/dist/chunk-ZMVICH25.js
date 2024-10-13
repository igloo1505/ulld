import {
  SettingsAppendixOrderByWithRelationInputSchema
} from "./chunk-GW35P4TK.js";
import {
  SettingsAppendixWhereUniqueInputSchema
} from "./chunk-6OJYQLFK.js";
import {
  SettingsAppendixWhereInputSchema
} from "./chunk-O6RAGOPN.js";

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
//# sourceMappingURL=chunk-ZMVICH25.js.map