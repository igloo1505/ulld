// src/database/inputTypeSchemas/DJTCreateManyInputSchema.ts
import { z } from "zod";
var DJTCreateManyInputSchema = z.object({
  id: z.number().int().optional(),
  type: z.string(),
  data: z.instanceof(Buffer)
}).strict();
var DJTCreateManyInputSchema_default = DJTCreateManyInputSchema;

export {
  DJTCreateManyInputSchema,
  DJTCreateManyInputSchema_default
};
//# sourceMappingURL=chunk-7HYR47VV.js.map