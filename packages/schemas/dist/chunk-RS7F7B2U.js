import {
  SettingsCreateManyInputSchema
} from "./chunk-YVELXHHQ.js";

// src/database/outputTypeSchemas/SettingsCreateManyArgsSchema.ts
import { z } from "zod";
var SettingsCreateManyArgsSchema = z.object({
  data: z.union([SettingsCreateManyInputSchema, SettingsCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var SettingsCreateManyArgsSchema_default = SettingsCreateManyArgsSchema;

export {
  SettingsCreateManyArgsSchema,
  SettingsCreateManyArgsSchema_default
};
//# sourceMappingURL=chunk-RS7F7B2U.js.map