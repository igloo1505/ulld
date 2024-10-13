import {
  SettingsAppendixUpdateInputSchema
} from "./chunk-MZ3P7ZUQ.js";
import {
  SettingsAppendixUncheckedUpdateInputSchema
} from "./chunk-UY5YNQWI.js";
import {
  SettingsAppendixWhereUniqueInputSchema
} from "./chunk-6OJYQLFK.js";

// src/database/outputTypeSchemas/SettingsAppendixUpdateArgsSchema.ts
import { z } from "zod";
var SettingsAppendixSelectSchema = z.object({
  id: z.boolean().optional(),
  data: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
var SettingsAppendixUpdateArgsSchema = z.object({
  select: SettingsAppendixSelectSchema.optional(),
  data: z.union([SettingsAppendixUpdateInputSchema, SettingsAppendixUncheckedUpdateInputSchema]),
  where: SettingsAppendixWhereUniqueInputSchema
}).strict();
var SettingsAppendixUpdateArgsSchema_default = SettingsAppendixUpdateArgsSchema;

export {
  SettingsAppendixSelectSchema,
  SettingsAppendixUpdateArgsSchema,
  SettingsAppendixUpdateArgsSchema_default
};
//# sourceMappingURL=chunk-R6EC7VP2.js.map