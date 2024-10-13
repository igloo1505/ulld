import {
  TimePeriodSelectSchema
} from "./chunk-QQELZW2A.js";
import {
  TimePeriodIncludeSchema
} from "./chunk-QGBCG46B.js";

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
//# sourceMappingURL=chunk-WE5R57W4.js.map