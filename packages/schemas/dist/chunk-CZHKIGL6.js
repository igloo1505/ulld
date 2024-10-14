import {
  SettingsAppendixUpdateInputSchema
} from "./chunk-JGDPM3L4.js";
import {
  SettingsAppendixUncheckedUpdateInputSchema
} from "./chunk-OY2PO5OC.js";
import {
  SettingsAppendixWhereUniqueInputSchema
} from "./chunk-BGFFYPAT.js";

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
//# sourceMappingURL=chunk-CZHKIGL6.js.map