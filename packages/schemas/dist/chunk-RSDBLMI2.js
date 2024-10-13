import {
  autoSettingSchema
} from "./chunk-EK76L66X.js";

// src/database/modelSchema/AutoSettingSchema.ts
import { z } from "zod";
var AutoSettingSchema = z.object({
  type: autoSettingSchema,
  id: z.number().int(),
  glob: z.string(),
  value: z.string()
});
var AutoSettingPartialSchema = AutoSettingSchema.partial();
var AutoSettingSchema_default = AutoSettingSchema;

export {
  AutoSettingSchema,
  AutoSettingPartialSchema,
  AutoSettingSchema_default
};
//# sourceMappingURL=chunk-RSDBLMI2.js.map