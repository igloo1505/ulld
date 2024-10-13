// src/database/inputTypeSchemas/IpynbUpdateoutgoingQuickLinksInputSchema.ts
import { z } from "zod";
var IpynbUpdateoutgoingQuickLinksInputSchema = z.object({
  set: z.string().array().optional(),
  push: z.union([z.string(), z.string().array()]).optional()
}).strict();
var IpynbUpdateoutgoingQuickLinksInputSchema_default = IpynbUpdateoutgoingQuickLinksInputSchema;

export {
  IpynbUpdateoutgoingQuickLinksInputSchema,
  IpynbUpdateoutgoingQuickLinksInputSchema_default
};
//# sourceMappingURL=chunk-RKEDHJYD.js.map