import {
  IpynbCreateManyInputSchema
} from "./chunk-KBHZHHT4.js";

// src/database/outputTypeSchemas/IpynbCreateManyArgsSchema.ts
import { z } from "zod";
var IpynbCreateManyArgsSchema = z.object({
  data: z.union([IpynbCreateManyInputSchema, IpynbCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var IpynbCreateManyArgsSchema_default = IpynbCreateManyArgsSchema;

export {
  IpynbCreateManyArgsSchema,
  IpynbCreateManyArgsSchema_default
};
//# sourceMappingURL=chunk-D444VNMY.js.map