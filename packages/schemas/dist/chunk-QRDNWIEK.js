import {
  SettingsAppendixOrderByWithRelationInputSchema
} from "./chunk-AACONCNY.js";
import {
  SettingsAppendixScalarFieldEnumSchema
} from "./chunk-Q4LGGI3V.js";
import {
  SettingsAppendixWhereUniqueInputSchema
} from "./chunk-BGFFYPAT.js";
import {
  SettingsAppendixWhereInputSchema
} from "./chunk-KMSRH34U.js";

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
//# sourceMappingURL=chunk-QRDNWIEK.js.map