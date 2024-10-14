import {
  AutoSettingCreateInputSchema
} from "./chunk-5QGKR5FV.js";
import {
  AutoSettingUncheckedCreateInputSchema
} from "./chunk-7E3AGULH.js";
import {
  AutoSettingUpdateInputSchema
} from "./chunk-3MCATGK5.js";
import {
  AutoSettingUncheckedUpdateInputSchema
} from "./chunk-JJ7CIOGP.js";
import {
  AutoSettingWhereUniqueInputSchema
} from "./chunk-6BDYKCTD.js";

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
//# sourceMappingURL=chunk-WYY5HXFY.js.map