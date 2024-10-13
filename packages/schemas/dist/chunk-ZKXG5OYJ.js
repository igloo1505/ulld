import {
  SettingsUpdateManyMutationInputSchema
} from "./chunk-OQ43FMVN.js";
import {
  SettingsUncheckedUpdateManyInputSchema
} from "./chunk-3PBW3UA4.js";
import {
  SettingsWhereInputSchema
} from "./chunk-EHHLO74Z.js";

// src/database/outputTypeSchemas/SettingsUpdateManyArgsSchema.ts
import { z } from "zod";
var SettingsUpdateManyArgsSchema = z.object({
  data: z.union([SettingsUpdateManyMutationInputSchema, SettingsUncheckedUpdateManyInputSchema]),
  where: SettingsWhereInputSchema.optional()
}).strict();
var SettingsUpdateManyArgsSchema_default = SettingsUpdateManyArgsSchema;

export {
  SettingsUpdateManyArgsSchema,
  SettingsUpdateManyArgsSchema_default
};
//# sourceMappingURL=chunk-ZKXG5OYJ.js.map