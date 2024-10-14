import {
  TimePeriodCreateManyInputSchema
} from "./chunk-7WNTIKTF.js";

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
//# sourceMappingURL=chunk-75UE7VXH.js.map