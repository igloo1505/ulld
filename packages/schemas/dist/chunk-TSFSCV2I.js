// src/database/inputTypeSchemas/RandomImageCreateInputSchema.ts
import { z } from "zod";
var RandomImageCreateInputSchema = z.object({
  path: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
var RandomImageCreateInputSchema_default = RandomImageCreateInputSchema;

export {
  RandomImageCreateInputSchema,
  RandomImageCreateInputSchema_default
};
//# sourceMappingURL=chunk-TSFSCV2I.js.map