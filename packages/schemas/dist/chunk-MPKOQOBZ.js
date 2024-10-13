import {
  SettingsCreateManyInputSchema
} from "./chunk-EDFXX3PP.js";

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
//# sourceMappingURL=chunk-MPKOQOBZ.js.map