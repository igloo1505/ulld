// src/database/inputTypeSchemas/IpynbUpdatecitationsListOrderInputSchema.ts
import { z } from "zod";
var IpynbUpdatecitationsListOrderInputSchema = z.object({
  set: z.string().array().optional(),
  push: z.union([z.string(), z.string().array()]).optional()
}).strict();
var IpynbUpdatecitationsListOrderInputSchema_default = IpynbUpdatecitationsListOrderInputSchema;

export {
  IpynbUpdatecitationsListOrderInputSchema,
  IpynbUpdatecitationsListOrderInputSchema_default
};
//# sourceMappingURL=chunk-HZ5M6SU7.js.map