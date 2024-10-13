import {
  ServingCreateManyInputSchema
} from "./chunk-AI76AVFX.js";

// src/database/outputTypeSchemas/ServingCreateManyAndReturnArgsSchema.ts
import { z } from "zod";
var ServingCreateManyAndReturnArgsSchema = z.object({
  data: z.union([ServingCreateManyInputSchema, ServingCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var ServingCreateManyAndReturnArgsSchema_default = ServingCreateManyAndReturnArgsSchema;

export {
  ServingCreateManyAndReturnArgsSchema,
  ServingCreateManyAndReturnArgsSchema_default
};
//# sourceMappingURL=chunk-3YRCYZK6.js.map