import {
  AutoSettingCreateInputSchema
} from "./chunk-MHEQ6QIN.js";
import {
  AutoSettingUncheckedCreateInputSchema
} from "./chunk-ZGORRXDK.js";
import {
  AutoSettingUpdateInputSchema
} from "./chunk-A7CXWLXI.js";
import {
  AutoSettingUncheckedUpdateInputSchema
} from "./chunk-WBU7GVUW.js";
import {
  AutoSettingWhereUniqueInputSchema
} from "./chunk-4AABQBWV.js";

// src/database/outputTypeSchemas/AutoSettingUpsertArgsSchema.ts
import { z } from "zod";
var AutoSettingSelectSchema = z.object({
  id: z.boolean().optional(),
  type: z.boolean().optional(),
  glob: z.boolean().optional(),
  value: z.boolean().optional()
}).strict();
var AutoSettingUpsertArgsSchema = z.object({
  select: AutoSettingSelectSchema.optional(),
  where: AutoSettingWhereUniqueInputSchema,
  create: z.union([AutoSettingCreateInputSchema, AutoSettingUncheckedCreateInputSchema]),
  update: z.union([AutoSettingUpdateInputSchema, AutoSettingUncheckedUpdateInputSchema])
}).strict();
var AutoSettingUpsertArgsSchema_default = AutoSettingUpsertArgsSchema;

export {
  AutoSettingSelectSchema,
  AutoSettingUpsertArgsSchema,
  AutoSettingUpsertArgsSchema_default
};
//# sourceMappingURL=chunk-7TWJ4E66.js.map