import {
  SettingsAppendixWhereUniqueInputSchema
} from "./chunk-BGFFYPAT.js";

// src/database/outputTypeSchemas/SettingsAppendixDeleteArgsSchema.ts
import { z } from "zod";
var SettingsAppendixSelectSchema = z.object({
  id: z.boolean().optional(),
  data: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
var SettingsAppendixDeleteArgsSchema = z.object({
  select: SettingsAppendixSelectSchema.optional(),
  where: SettingsAppendixWhereUniqueInputSchema
}).strict();
var SettingsAppendixDeleteArgsSchema_default = SettingsAppendixDeleteArgsSchema;

export {
  SettingsAppendixSelectSchema,
  SettingsAppendixDeleteArgsSchema,
  SettingsAppendixDeleteArgsSchema_default
};
//# sourceMappingURL=chunk-3FWEYSL3.js.map