// src/database/inputTypeSchemas/DJTCreateInputSchema.ts
import { z } from "zod";
var DJTCreateInputSchema = z.object({
  type: z.string(),
  data: z.instanceof(Buffer)
}).strict();
var DJTCreateInputSchema_default = DJTCreateInputSchema;

export {
  DJTCreateInputSchema,
  DJTCreateInputSchema_default
};
//# sourceMappingURL=chunk-PZVG43IM.js.map