// src/database/inputTypeSchemas/DJTUncheckedCreateInputSchema.ts
import { z } from "zod";
var DJTUncheckedCreateInputSchema = z.object({
  id: z.number().int().optional(),
  type: z.string(),
  data: z.instanceof(Buffer)
}).strict();
var DJTUncheckedCreateInputSchema_default = DJTUncheckedCreateInputSchema;

export {
  DJTUncheckedCreateInputSchema,
  DJTUncheckedCreateInputSchema_default
};
//# sourceMappingURL=chunk-JKCNDK7M.js.map