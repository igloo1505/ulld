import {
  TimePeriodCreateManyInputSchema
} from "./chunk-24DJFHZH.js";

// src/database/outputTypeSchemas/TimePeriodCreateManyArgsSchema.ts
import { z } from "zod";
var TimePeriodCreateManyArgsSchema = z.object({
  data: z.union([TimePeriodCreateManyInputSchema, TimePeriodCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var TimePeriodCreateManyArgsSchema_default = TimePeriodCreateManyArgsSchema;

export {
  TimePeriodCreateManyArgsSchema,
  TimePeriodCreateManyArgsSchema_default
};
//# sourceMappingURL=chunk-QCM4CKZM.js.map