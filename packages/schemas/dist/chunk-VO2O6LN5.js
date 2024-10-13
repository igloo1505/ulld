// src/database/outputTypeSchemas/DietCountOutputTypeSelectSchema.ts
import { z } from "zod";
var DietCountOutputTypeSelectSchema = z.object({
  items: z.boolean().optional(),
  periodsFollowed: z.boolean().optional(),
  HealthReport: z.boolean().optional()
}).strict();
var DietCountOutputTypeSelectSchema_default = DietCountOutputTypeSelectSchema;

export {
  DietCountOutputTypeSelectSchema,
  DietCountOutputTypeSelectSchema_default
};
//# sourceMappingURL=chunk-VO2O6LN5.js.map