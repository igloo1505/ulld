import {
  TimePeriodUncheckedUpdateManyInputSchema
} from "./chunk-LFMR5DU7.js";
import {
  TimePeriodUpdateManyMutationInputSchema
} from "./chunk-NIIBC3QF.js";
import {
  TimePeriodWhereInputSchema
} from "./chunk-4FCA5YKO.js";

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
//# sourceMappingURL=chunk-YVYLDVZG.js.map