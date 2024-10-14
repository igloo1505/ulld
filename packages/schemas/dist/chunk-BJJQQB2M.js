import {
  autoSettingSchema
} from "./chunk-76RQYGNI.js";

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
//# sourceMappingURL=chunk-BJJQQB2M.js.map