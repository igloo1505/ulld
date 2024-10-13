import {
  IpynbCountOutputTypeSelectSchema
} from "./chunk-EPSFFV6G.js";

// src/database/outputTypeSchemas/IpynbCountOutputTypeArgsSchema.ts
import { z } from "zod";
var IpynbCountOutputTypeArgsSchema = z.object({
  select: z.lazy(() => IpynbCountOutputTypeSelectSchema).nullish()
}).strict();
var IpynbCountOutputTypeArgsSchema_default = IpynbCountOutputTypeSelectSchema;

export {
  IpynbCountOutputTypeArgsSchema,
  IpynbCountOutputTypeArgsSchema_default
};
//# sourceMappingURL=chunk-ERM5JPBF.js.map