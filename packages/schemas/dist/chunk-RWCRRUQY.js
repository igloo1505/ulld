import {
  AutoSettingCreateInputSchema
} from "./chunk-5QGKR5FV.js";
import {
  AutoSettingUncheckedCreateInputSchema
} from "./chunk-7E3AGULH.js";

// src/database/outputTypeSchemas/AutoSettingCreateArgsSchema.ts
import { z } from "zod";
var AutoSettingSelectSchema = z.object({
  id: z.boolean().optional(),
  type: z.boolean().optional(),
  glob: z.boolean().optional(),
  value: z.boolean().optional()
}).strict();
var AutoSettingCreateArgsSchema = z.object({
  select: AutoSettingSelectSchema.optional(),
  data: z.union([AutoSettingCreateInputSchema, AutoSettingUncheckedCreateInputSchema])
}).strict();
var AutoSettingCreateArgsSchema_default = AutoSettingCreateArgsSchema;

export {
  AutoSettingSelectSchema,
  AutoSettingCreateArgsSchema,
  AutoSettingCreateArgsSchema_default
};
//# sourceMappingURL=chunk-RWCRRUQY.js.map