import {
  autoSettingSchema
} from "./chunk-EK76L66X.js";

// src/database/inputTypeSchemas/AutoSettingUncheckedCreateInputSchema.ts
import { z } from "zod";
var AutoSettingUncheckedCreateInputSchema = z.object({
  id: z.number().int().optional(),
  type: z.lazy(() => autoSettingSchema),
  glob: z.string(),
  value: z.string()
}).strict();
var AutoSettingUncheckedCreateInputSchema_default = AutoSettingUncheckedCreateInputSchema;

export {
  AutoSettingUncheckedCreateInputSchema,
  AutoSettingUncheckedCreateInputSchema_default
};
//# sourceMappingURL=chunk-ZGORRXDK.js.map