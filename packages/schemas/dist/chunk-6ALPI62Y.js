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

// src/database/outputTypeSchemas/SettingsAppendixFindManyArgsSchema.ts
import { z } from "zod";
var SettingsAppendixSelectSchema = z.object({
  id: z.boolean().optional(),
  data: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
var SettingsAppendixFindManyArgsSchema = z.object({
  select: SettingsAppendixSelectSchema.optional(),
  where: SettingsAppendixWhereInputSchema.optional(),
  orderBy: z.union([SettingsAppendixOrderByWithRelationInputSchema.array(), SettingsAppendixOrderByWithRelationInputSchema]).optional(),
  cursor: SettingsAppendixWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([SettingsAppendixScalarFieldEnumSchema, SettingsAppendixScalarFieldEnumSchema.array()]).optional()
}).strict();
var SettingsAppendixFindManyArgsSchema_default = SettingsAppendixFindManyArgsSchema;

export {
  SettingsAppendixSelectSchema,
  SettingsAppendixFindManyArgsSchema,
  SettingsAppendixFindManyArgsSchema_default
};
//# sourceMappingURL=chunk-6ALPI62Y.js.map