import {
  SettingsAppendixOrderByWithRelationInputSchema
} from "./chunk-GW35P4TK.js";
import {
  SettingsAppendixScalarFieldEnumSchema
} from "./chunk-ESW63JLV.js";
import {
  SettingsAppendixWhereUniqueInputSchema
} from "./chunk-6OJYQLFK.js";
import {
  SettingsAppendixWhereInputSchema
} from "./chunk-O6RAGOPN.js";

// src/database/outputTypeSchemas/SettingsAppendixFindFirstOrThrowArgsSchema.ts
import { z } from "zod";
var SettingsAppendixSelectSchema = z.object({
  id: z.boolean().optional(),
  data: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
var SettingsAppendixFindFirstOrThrowArgsSchema = z.object({
  select: SettingsAppendixSelectSchema.optional(),
  where: SettingsAppendixWhereInputSchema.optional(),
  orderBy: z.union([SettingsAppendixOrderByWithRelationInputSchema.array(), SettingsAppendixOrderByWithRelationInputSchema]).optional(),
  cursor: SettingsAppendixWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([SettingsAppendixScalarFieldEnumSchema, SettingsAppendixScalarFieldEnumSchema.array()]).optional()
}).strict();
var SettingsAppendixFindFirstOrThrowArgsSchema_default = SettingsAppendixFindFirstOrThrowArgsSchema;

export {
  SettingsAppendixSelectSchema,
  SettingsAppendixFindFirstOrThrowArgsSchema,
  SettingsAppendixFindFirstOrThrowArgsSchema_default
};
//# sourceMappingURL=chunk-LKAIIT6N.js.map