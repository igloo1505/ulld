import {
  SettingsAppendixCreateManyInputSchema
} from "./chunk-7Q4SKIER.js";

// src/database/outputTypeSchemas/SettingsAppendixCreateManyArgsSchema.ts
import { z } from "zod";
var SettingsAppendixCreateManyArgsSchema = z.object({
  data: z.union([SettingsAppendixCreateManyInputSchema, SettingsAppendixCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var SettingsAppendixCreateManyArgsSchema_default = SettingsAppendixCreateManyArgsSchema;

export {
  SettingsAppendixCreateManyArgsSchema,
  SettingsAppendixCreateManyArgsSchema_default
};
//# sourceMappingURL=chunk-SUH5S5OG.js.map