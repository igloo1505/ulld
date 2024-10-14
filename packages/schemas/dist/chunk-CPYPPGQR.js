import {
  SettingsAppendixUncheckedUpdateManyInputSchema
} from "./chunk-E6R7HOSF.js";
import {
  SettingsAppendixUpdateManyMutationInputSchema
} from "./chunk-SPAU3ZER.js";
import {
  SettingsAppendixWhereInputSchema
} from "./chunk-KMSRH34U.js";

// src/database/outputTypeSchemas/SettingsAppendixUpdateManyArgsSchema.ts
import { z } from "zod";
var SettingsAppendixUpdateManyArgsSchema = z.object({
  data: z.union([SettingsAppendixUpdateManyMutationInputSchema, SettingsAppendixUncheckedUpdateManyInputSchema]),
  where: SettingsAppendixWhereInputSchema.optional()
}).strict();
var SettingsAppendixUpdateManyArgsSchema_default = SettingsAppendixUpdateManyArgsSchema;

export {
  SettingsAppendixUpdateManyArgsSchema,
  SettingsAppendixUpdateManyArgsSchema_default
};
//# sourceMappingURL=chunk-CPYPPGQR.js.map