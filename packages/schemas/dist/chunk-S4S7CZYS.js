import {
  SettingsCreateManyInputSchema
} from "./chunk-YVELXHHQ.js";

// src/database/outputTypeSchemas/SettingsCreateManyAndReturnArgsSchema.ts
import { z } from "zod";
var SettingsCreateManyAndReturnArgsSchema = z.object({
  data: z.union([SettingsCreateManyInputSchema, SettingsCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var SettingsCreateManyAndReturnArgsSchema_default = SettingsCreateManyAndReturnArgsSchema;

export {
  SettingsCreateManyAndReturnArgsSchema,
  SettingsCreateManyAndReturnArgsSchema_default
};
//# sourceMappingURL=chunk-S4S7CZYS.js.map