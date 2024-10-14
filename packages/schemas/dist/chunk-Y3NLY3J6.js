import {
  AutoSettingUpdateManyMutationInputSchema
} from "./chunk-C6M2NUMU.js";
import {
  AutoSettingUncheckedUpdateManyInputSchema
} from "./chunk-WB66DE6P.js";
import {
  AutoSettingWhereInputSchema
} from "./chunk-ZZLVU5LM.js";

// src/database/outputTypeSchemas/AutoSettingUpdateManyArgsSchema.ts
import { z } from "zod";
var AutoSettingUpdateManyArgsSchema = z.object({
  data: z.union([AutoSettingUpdateManyMutationInputSchema, AutoSettingUncheckedUpdateManyInputSchema]),
  where: AutoSettingWhereInputSchema.optional()
}).strict();
var AutoSettingUpdateManyArgsSchema_default = AutoSettingUpdateManyArgsSchema;

export {
  AutoSettingUpdateManyArgsSchema,
  AutoSettingUpdateManyArgsSchema_default
};
//# sourceMappingURL=chunk-Y3NLY3J6.js.map