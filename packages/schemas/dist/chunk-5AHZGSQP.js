import {
  SettingsUpdateManyMutationInputSchema
} from "./chunk-TA5GRHMY.js";
import {
  SettingsUncheckedUpdateManyInputSchema
} from "./chunk-NFUHCW23.js";
import {
  SettingsWhereInputSchema
} from "./chunk-ULKFREWN.js";

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
//# sourceMappingURL=chunk-5AHZGSQP.js.map