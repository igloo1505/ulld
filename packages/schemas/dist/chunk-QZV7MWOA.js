import {
  TimePeriodUncheckedUpdateManyInputSchema
} from "./chunk-V7SV5TQF.js";
import {
  TimePeriodUpdateManyMutationInputSchema
} from "./chunk-HDHROYTU.js";
import {
  TimePeriodWhereInputSchema
} from "./chunk-MDAJAPVT.js";

// src/database/outputTypeSchemas/TimePeriodUpdateManyArgsSchema.ts
import { z } from "zod";
var TimePeriodUpdateManyArgsSchema = z.object({
  data: z.union([TimePeriodUpdateManyMutationInputSchema, TimePeriodUncheckedUpdateManyInputSchema]),
  where: TimePeriodWhereInputSchema.optional()
}).strict();
var TimePeriodUpdateManyArgsSchema_default = TimePeriodUpdateManyArgsSchema;

export {
  TimePeriodUpdateManyArgsSchema,
  TimePeriodUpdateManyArgsSchema_default
};
//# sourceMappingURL=chunk-QZV7MWOA.js.map