import {
  AutoSettingCreateManyInputSchema
} from "./chunk-TOZH6THP.js";

// src/database/outputTypeSchemas/AutoSettingCreateManyAndReturnArgsSchema.ts
import { z } from "zod";
var AutoSettingCreateManyAndReturnArgsSchema = z.object({
  data: z.union([AutoSettingCreateManyInputSchema, AutoSettingCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var AutoSettingCreateManyAndReturnArgsSchema_default = AutoSettingCreateManyAndReturnArgsSchema;

export {
  AutoSettingCreateManyAndReturnArgsSchema,
  AutoSettingCreateManyAndReturnArgsSchema_default
};
//# sourceMappingURL=chunk-AA622YZH.js.map