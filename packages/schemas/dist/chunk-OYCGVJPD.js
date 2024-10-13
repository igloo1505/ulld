import {
  AutoSettingCreateManyInputSchema
} from "./chunk-TOZH6THP.js";

// src/database/outputTypeSchemas/AutoSettingCreateManyArgsSchema.ts
import { z } from "zod";
var AutoSettingCreateManyArgsSchema = z.object({
  data: z.union([AutoSettingCreateManyInputSchema, AutoSettingCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var AutoSettingCreateManyArgsSchema_default = AutoSettingCreateManyArgsSchema;

export {
  AutoSettingCreateManyArgsSchema,
  AutoSettingCreateManyArgsSchema_default
};
//# sourceMappingURL=chunk-OYCGVJPD.js.map