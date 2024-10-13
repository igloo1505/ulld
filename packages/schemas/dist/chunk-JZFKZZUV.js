// src/database/inputTypeSchemas/RandomImageUncheckedCreateInputSchema.ts
import { z } from "zod";
var RandomImageUncheckedCreateInputSchema = z.object({
  path: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
var RandomImageUncheckedCreateInputSchema_default = RandomImageUncheckedCreateInputSchema;

export {
  RandomImageUncheckedCreateInputSchema,
  RandomImageUncheckedCreateInputSchema_default
};
//# sourceMappingURL=chunk-JZFKZZUV.js.map