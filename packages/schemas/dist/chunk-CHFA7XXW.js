import {
  IpynbSelectSchema
} from "./chunk-3ROZV7UD.js";
import {
  IpynbIncludeSchema
} from "./chunk-JV52BDQC.js";

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
//# sourceMappingURL=chunk-CHFA7XXW.js.map