import {
  AutoSettingUpdateManyMutationInputSchema
} from "./chunk-7YQAQA4V.js";
import {
  AutoSettingUncheckedUpdateManyInputSchema
} from "./chunk-JQ2RXCOM.js";
import {
  AutoSettingWhereInputSchema
} from "./chunk-I47O5T7B.js";

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
//# sourceMappingURL=chunk-QP3YUY54.js.map