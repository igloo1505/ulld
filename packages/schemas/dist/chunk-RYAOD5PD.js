import {
  AutoSettingWhereUniqueInputSchema
} from "./chunk-6BDYKCTD.js";

// src/database/outputTypeSchemas/AutoSettingFindUniqueOrThrowArgsSchema.ts
import { z } from "zod";
var AutoSettingSelectSchema = z.object({
  id: z.boolean().optional(),
  type: z.boolean().optional(),
  glob: z.boolean().optional(),
  value: z.boolean().optional()
}).strict();
var AutoSettingFindUniqueOrThrowArgsSchema = z.object({
  select: AutoSettingSelectSchema.optional(),
  where: AutoSettingWhereUniqueInputSchema
}).strict();
var AutoSettingFindUniqueOrThrowArgsSchema_default = AutoSettingFindUniqueOrThrowArgsSchema;

export {
  AutoSettingSelectSchema,
  AutoSettingFindUniqueOrThrowArgsSchema,
  AutoSettingFindUniqueOrThrowArgsSchema_default
};
//# sourceMappingURL=chunk-RYAOD5PD.js.map