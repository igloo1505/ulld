import {
  TimePeriodSelectSchema
} from "./chunk-EZ3UNWWW.js";
import {
  TimePeriodIncludeSchema
} from "./chunk-KDYZAD52.js";

// src/database/outputTypeSchemas/TimePeriodArgsSchema.ts
import { z } from "zod";
var TimePeriodArgsSchema = z.object({
  select: z.lazy(() => TimePeriodSelectSchema).optional(),
  include: z.lazy(() => TimePeriodIncludeSchema).optional()
}).strict();
var TimePeriodArgsSchema_default = TimePeriodArgsSchema;

export {
  TimePeriodArgsSchema,
  TimePeriodArgsSchema_default
};
//# sourceMappingURL=chunk-M74SAFA3.js.map