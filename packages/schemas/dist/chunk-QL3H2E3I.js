import {
  AutoSettingCreateManyInputSchema
} from "./chunk-DIBRFY26.js";

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
//# sourceMappingURL=chunk-QL3H2E3I.js.map