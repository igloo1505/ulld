import {
  SettingsAppendixCreateInputSchema
} from "./chunk-GUWG5TC5.js";
import {
  SettingsAppendixUncheckedCreateInputSchema
} from "./chunk-44PJQZKC.js";
import {
  SettingsAppendixUpdateInputSchema
} from "./chunk-MZ3P7ZUQ.js";
import {
  SettingsAppendixUncheckedUpdateInputSchema
} from "./chunk-UY5YNQWI.js";
import {
  SettingsAppendixWhereUniqueInputSchema
} from "./chunk-6OJYQLFK.js";

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
//# sourceMappingURL=chunk-LXUKB45I.js.map