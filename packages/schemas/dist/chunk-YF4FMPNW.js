import {
  IpynbCreateManyInputSchema
} from "./chunk-TEDZTXJU.js";

// src/database/outputTypeSchemas/IpynbCreateManyAndReturnArgsSchema.ts
import { z } from "zod";
var IpynbCreateManyAndReturnArgsSchema = z.object({
  data: z.union([IpynbCreateManyInputSchema, IpynbCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var IpynbCreateManyAndReturnArgsSchema_default = IpynbCreateManyAndReturnArgsSchema;

export {
  IpynbCreateManyAndReturnArgsSchema,
  IpynbCreateManyAndReturnArgsSchema_default
};
//# sourceMappingURL=chunk-YF4FMPNW.js.map