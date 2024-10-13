import {
  SettingsAppendixCreateManyInputSchema
} from "./chunk-CQA4OLYH.js";

// src/database/outputTypeSchemas/SettingsAppendixCreateManyAndReturnArgsSchema.ts
import { z } from "zod";
var SettingsAppendixCreateManyAndReturnArgsSchema = z.object({
  data: z.union([SettingsAppendixCreateManyInputSchema, SettingsAppendixCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var SettingsAppendixCreateManyAndReturnArgsSchema_default = SettingsAppendixCreateManyAndReturnArgsSchema;

export {
  SettingsAppendixCreateManyAndReturnArgsSchema,
  SettingsAppendixCreateManyAndReturnArgsSchema_default
};
//# sourceMappingURL=chunk-VV7RLN2Q.js.map