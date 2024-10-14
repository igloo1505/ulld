import {
  DietArgsSchema
} from "./chunk-KDYZAD52.js";

// src/database/inputTypeSchemas/TimePeriodSelectSchema.ts
import { z } from "zod";
var TimePeriodSelectSchema = z.object({
  id: z.boolean().optional(),
  start: z.boolean().optional(),
  end: z.boolean().optional(),
  dietId: z.boolean().optional(),
  Diet: z.union([z.boolean(), z.lazy(() => DietArgsSchema)]).optional()
}).strict();
var TimePeriodSelectSchema_default = TimePeriodSelectSchema;

export {
  TimePeriodSelectSchema,
  TimePeriodSelectSchema_default
};
//# sourceMappingURL=chunk-EZ3UNWWW.js.map