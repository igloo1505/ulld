import {
  AutoSettingWhereUniqueInputSchema
} from "./chunk-4AABQBWV.js";

// src/database/outputTypeSchemas/AutoSettingDeleteArgsSchema.ts
import { z } from "zod";
var AutoSettingSelectSchema = z.object({
  id: z.boolean().optional(),
  type: z.boolean().optional(),
  glob: z.boolean().optional(),
  value: z.boolean().optional()
}).strict();
var AutoSettingDeleteArgsSchema = z.object({
  select: AutoSettingSelectSchema.optional(),
  where: AutoSettingWhereUniqueInputSchema
}).strict();
var AutoSettingDeleteArgsSchema_default = AutoSettingDeleteArgsSchema;

export {
  AutoSettingSelectSchema,
  AutoSettingDeleteArgsSchema,
  AutoSettingDeleteArgsSchema_default
};
//# sourceMappingURL=chunk-W5TYI6SD.js.map