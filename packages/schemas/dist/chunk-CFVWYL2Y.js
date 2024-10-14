import {
  SettingsAppendixWhereUniqueInputSchema
} from "./chunk-BGFFYPAT.js";

// src/database/outputTypeSchemas/SettingsAppendixFindUniqueArgsSchema.ts
import { z } from "zod";
var SettingsAppendixSelectSchema = z.object({
  id: z.boolean().optional(),
  data: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
var SettingsAppendixFindUniqueArgsSchema = z.object({
  select: SettingsAppendixSelectSchema.optional(),
  where: SettingsAppendixWhereUniqueInputSchema
}).strict();
var SettingsAppendixFindUniqueArgsSchema_default = SettingsAppendixFindUniqueArgsSchema;

export {
  SettingsAppendixSelectSchema,
  SettingsAppendixFindUniqueArgsSchema,
  SettingsAppendixFindUniqueArgsSchema_default
};
//# sourceMappingURL=chunk-CFVWYL2Y.js.map