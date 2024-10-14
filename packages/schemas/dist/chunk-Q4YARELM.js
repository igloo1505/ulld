import {
  AutoSettingUpdateInputSchema
} from "./chunk-3MCATGK5.js";
import {
  AutoSettingUncheckedUpdateInputSchema
} from "./chunk-JJ7CIOGP.js";
import {
  AutoSettingWhereUniqueInputSchema
} from "./chunk-6BDYKCTD.js";

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
//# sourceMappingURL=chunk-Q4YARELM.js.map