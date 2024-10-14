import {
  SettingsAppendixCreateInputSchema
} from "./chunk-A4ZNYCRG.js";
import {
  SettingsAppendixUncheckedCreateInputSchema
} from "./chunk-72LJBI4D.js";
import {
  SettingsAppendixUpdateInputSchema
} from "./chunk-JGDPM3L4.js";
import {
  SettingsAppendixUncheckedUpdateInputSchema
} from "./chunk-OY2PO5OC.js";
import {
  SettingsAppendixWhereUniqueInputSchema
} from "./chunk-BGFFYPAT.js";

// src/database/outputTypeSchemas/SettingsAppendixUpsertArgsSchema.ts
import { z } from "zod";
var SettingsAppendixSelectSchema = z.object({
  id: z.boolean().optional(),
  data: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
var SettingsAppendixUpsertArgsSchema = z.object({
  select: SettingsAppendixSelectSchema.optional(),
  where: SettingsAppendixWhereUniqueInputSchema,
  create: z.union([SettingsAppendixCreateInputSchema, SettingsAppendixUncheckedCreateInputSchema]),
  update: z.union([SettingsAppendixUpdateInputSchema, SettingsAppendixUncheckedUpdateInputSchema])
}).strict();
var SettingsAppendixUpsertArgsSchema_default = SettingsAppendixUpsertArgsSchema;

export {
  SettingsAppendixSelectSchema,
  SettingsAppendixUpsertArgsSchema,
  SettingsAppendixUpsertArgsSchema_default
};
//# sourceMappingURL=chunk-VZDD6VOM.js.map