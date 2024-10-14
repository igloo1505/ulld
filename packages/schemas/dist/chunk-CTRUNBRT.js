// src/database/inputTypeSchemas/IpynbUpdateimportantValuesInputSchema.ts
import { z } from "zod";
var IpynbUpdateimportantValuesInputSchema = z.object({
  set: z.number().array().optional(),
  push: z.union([z.number(), z.number().array()]).optional()
}).strict();
var IpynbUpdateimportantValuesInputSchema_default = IpynbUpdateimportantValuesInputSchema;

export {
  IpynbUpdateimportantValuesInputSchema,
  IpynbUpdateimportantValuesInputSchema_default
};
//# sourceMappingURL=chunk-CTRUNBRT.js.map