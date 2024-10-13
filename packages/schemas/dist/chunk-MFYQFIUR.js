import {
  AutoSettingUpdateInputSchema
} from "./chunk-A7CXWLXI.js";
import {
  AutoSettingUncheckedUpdateInputSchema
} from "./chunk-WBU7GVUW.js";
import {
  AutoSettingWhereUniqueInputSchema
} from "./chunk-4AABQBWV.js";

// src/database/outputTypeSchemas/AutoSettingUpdateArgsSchema.ts
import { z } from "zod";
var AutoSettingSelectSchema = z.object({
  id: z.boolean().optional(),
  type: z.boolean().optional(),
  glob: z.boolean().optional(),
  value: z.boolean().optional()
}).strict();
var AutoSettingUpdateArgsSchema = z.object({
  select: AutoSettingSelectSchema.optional(),
  data: z.union([AutoSettingUpdateInputSchema, AutoSettingUncheckedUpdateInputSchema]),
  where: AutoSettingWhereUniqueInputSchema
}).strict();
var AutoSettingUpdateArgsSchema_default = AutoSettingUpdateArgsSchema;

export {
  AutoSettingSelectSchema,
  AutoSettingUpdateArgsSchema,
  AutoSettingUpdateArgsSchema_default
};
//# sourceMappingURL=chunk-MFYQFIUR.js.map