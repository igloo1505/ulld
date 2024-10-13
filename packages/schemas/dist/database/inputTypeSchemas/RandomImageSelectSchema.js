// src/database/inputTypeSchemas/RandomImageSelectSchema.ts
import { z } from "zod";
var RandomImageSelectSchema = z.object({
  path: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
var RandomImageSelectSchema_default = RandomImageSelectSchema;
export {
  RandomImageSelectSchema,
  RandomImageSelectSchema_default as default
};
//# sourceMappingURL=RandomImageSelectSchema.js.map