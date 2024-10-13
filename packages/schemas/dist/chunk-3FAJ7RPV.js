import {
  TimePeriodCreateManyInputSchema
} from "./chunk-24DJFHZH.js";

// src/database/outputTypeSchemas/TimePeriodCreateManyAndReturnArgsSchema.ts
import { z } from "zod";
var TimePeriodCreateManyAndReturnArgsSchema = z.object({
  data: z.union([TimePeriodCreateManyInputSchema, TimePeriodCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var TimePeriodCreateManyAndReturnArgsSchema_default = TimePeriodCreateManyAndReturnArgsSchema;

export {
  TimePeriodCreateManyAndReturnArgsSchema,
  TimePeriodCreateManyAndReturnArgsSchema_default
};
//# sourceMappingURL=chunk-3FAJ7RPV.js.map