import {
  SettingsAppendixUncheckedUpdateManyInputSchema
} from "./chunk-ATKVD2GZ.js";
import {
  SettingsAppendixUpdateManyMutationInputSchema
} from "./chunk-M33GZ43Z.js";
import {
  SettingsAppendixWhereInputSchema
} from "./chunk-O6RAGOPN.js";

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
//# sourceMappingURL=chunk-2UVMJFTX.js.map