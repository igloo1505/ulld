// src/database/modelSchema/DJTSchema.ts
import { z } from "zod";
var DJTSchema = z.object({
  id: z.number().int(),
  type: z.string(),
  data: z.instanceof(Buffer)
});
var DJTPartialSchema = DJTSchema.partial();
var DJTSchema_default = DJTSchema;

export {
  DJTSchema,
  DJTPartialSchema,
  DJTSchema_default
};
//# sourceMappingURL=chunk-HJOISYLW.js.map