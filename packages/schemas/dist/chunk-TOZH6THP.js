import {
  autoSettingSchema
} from "./chunk-EK76L66X.js";

// src/database/inputTypeSchemas/AutoSettingCreateManyInputSchema.ts
import { z } from "zod";
var AutoSettingCreateManyInputSchema = z.object({
  id: z.number().int().optional(),
  type: z.lazy(() => autoSettingSchema),
  glob: z.string(),
  value: z.string()
}).strict();
var AutoSettingCreateManyInputSchema_default = AutoSettingCreateManyInputSchema;

export {
  AutoSettingCreateManyInputSchema,
  AutoSettingCreateManyInputSchema_default
};
//# sourceMappingURL=chunk-TOZH6THP.js.map