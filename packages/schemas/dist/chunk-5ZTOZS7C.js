import {
  SettingsCreateManyInputSchema
} from "./chunk-EDFXX3PP.js";

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
//# sourceMappingURL=chunk-5ZTOZS7C.js.map