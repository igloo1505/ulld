import {
  autoSettingSchema
} from "./chunk-76RQYGNI.js";

// src/database/inputTypeSchemas/AutoSettingCreateInputSchema.ts
import { z } from "zod";
var AutoSettingCreateInputSchema = z.object({
  type: z.lazy(() => autoSettingSchema),
  glob: z.string(),
  value: z.string()
}).strict();
var AutoSettingCreateInputSchema_default = AutoSettingCreateInputSchema;

export {
  AutoSettingCreateInputSchema,
  AutoSettingCreateInputSchema_default
};
//# sourceMappingURL=chunk-5QGKR5FV.js.map