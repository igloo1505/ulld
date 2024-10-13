// src/database/inputTypeSchemas/DJTSelectSchema.ts
import { z } from "zod";
var DJTSelectSchema = z.object({
  id: z.boolean().optional(),
  type: z.boolean().optional(),
  data: z.boolean().optional()
}).strict();
var DJTSelectSchema_default = DJTSelectSchema;
export {
  DJTSelectSchema,
  DJTSelectSchema_default as default
};
//# sourceMappingURL=DJTSelectSchema.js.map