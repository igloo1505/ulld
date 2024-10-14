// src/database/inputTypeSchemas/RandomImageCreateManyInputSchema.ts
import { z } from "zod";
var RandomImageCreateManyInputSchema = z.object({
  path: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
var RandomImageCreateManyInputSchema_default = RandomImageCreateManyInputSchema;

export {
  RandomImageCreateManyInputSchema,
  RandomImageCreateManyInputSchema_default
};
//# sourceMappingURL=chunk-UYD7WSXB.js.map