import {
  AutoSettingWhereUniqueInputSchema
} from "./chunk-4AABQBWV.js";

// src/database/outputTypeSchemas/AutoSettingFindUniqueArgsSchema.ts
import { z } from "zod";
var AutoSettingSelectSchema = z.object({
  id: z.boolean().optional(),
  type: z.boolean().optional(),
  glob: z.boolean().optional(),
  value: z.boolean().optional()
}).strict();
var AutoSettingFindUniqueArgsSchema = z.object({
  select: AutoSettingSelectSchema.optional(),
  where: AutoSettingWhereUniqueInputSchema
}).strict();
var AutoSettingFindUniqueArgsSchema_default = AutoSettingFindUniqueArgsSchema;

export {
  AutoSettingSelectSchema,
  AutoSettingFindUniqueArgsSchema,
  AutoSettingFindUniqueArgsSchema_default
};
//# sourceMappingURL=chunk-4N47MZXD.js.map