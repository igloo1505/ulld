import {
  SettingsAppendixWhereUniqueInputSchema
} from "./chunk-6OJYQLFK.js";

// src/database/outputTypeSchemas/SettingsAppendixFindUniqueOrThrowArgsSchema.ts
import { z } from "zod";
var SettingsAppendixSelectSchema = z.object({
  id: z.boolean().optional(),
  data: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
var SettingsAppendixFindUniqueOrThrowArgsSchema = z.object({
  select: SettingsAppendixSelectSchema.optional(),
  where: SettingsAppendixWhereUniqueInputSchema
}).strict();
var SettingsAppendixFindUniqueOrThrowArgsSchema_default = SettingsAppendixFindUniqueOrThrowArgsSchema;

export {
  SettingsAppendixSelectSchema,
  SettingsAppendixFindUniqueOrThrowArgsSchema,
  SettingsAppendixFindUniqueOrThrowArgsSchema_default
};
//# sourceMappingURL=chunk-YO5R2VVQ.js.map