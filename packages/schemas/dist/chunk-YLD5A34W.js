import {
  SettingsAppendixCreateManyInputSchema
} from "./chunk-CQA4OLYH.js";

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
//# sourceMappingURL=chunk-YLD5A34W.js.map