import {
  IpynbSelectSchema
} from "./chunk-JLTQINQC.js";
import {
  IpynbIncludeSchema
} from "./chunk-YNCDDFUC.js";

// src/database/outputTypeSchemas/IpynbArgsSchema.ts
import { z } from "zod";
var IpynbArgsSchema = z.object({
  select: z.lazy(() => IpynbSelectSchema).optional(),
  include: z.lazy(() => IpynbIncludeSchema).optional()
}).strict();
var IpynbArgsSchema_default = IpynbArgsSchema;

export {
  IpynbArgsSchema,
  IpynbArgsSchema_default
};
//# sourceMappingURL=chunk-YMCM5HBB.js.map