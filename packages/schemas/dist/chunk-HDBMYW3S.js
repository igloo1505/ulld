import {
  SettingsAppendixCreateInputSchema
} from "./chunk-A4ZNYCRG.js";
import {
  SettingsAppendixUncheckedCreateInputSchema
} from "./chunk-72LJBI4D.js";

// src/database/outputTypeSchemas/SettingsAppendixCreateArgsSchema.ts
import { z } from "zod";
var SettingsAppendixSelectSchema = z.object({
  id: z.boolean().optional(),
  data: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
var SettingsAppendixCreateArgsSchema = z.object({
  select: SettingsAppendixSelectSchema.optional(),
  data: z.union([SettingsAppendixCreateInputSchema, SettingsAppendixUncheckedCreateInputSchema])
}).strict();
var SettingsAppendixCreateArgsSchema_default = SettingsAppendixCreateArgsSchema;

export {
  SettingsAppendixSelectSchema,
  SettingsAppendixCreateArgsSchema,
  SettingsAppendixCreateArgsSchema_default
};
//# sourceMappingURL=chunk-HDBMYW3S.js.map