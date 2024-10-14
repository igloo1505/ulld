// src/database/outputTypeSchemas/DietaryItemCountOutputTypeSelectSchema.ts
import { z } from "zod";
var DietaryItemCountOutputTypeSelectSchema = z.object({
  Diet: z.boolean().optional(),
  Serving: z.boolean().optional()
}).strict();
var DietaryItemCountOutputTypeSelectSchema_default = DietaryItemCountOutputTypeSelectSchema;

export {
  DietaryItemCountOutputTypeSelectSchema,
  DietaryItemCountOutputTypeSelectSchema_default
};
//# sourceMappingURL=chunk-RNIPPCR5.js.map