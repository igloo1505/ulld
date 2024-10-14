import {
  RandomImageCreateManyInputSchema
} from "./chunk-UYD7WSXB.js";

// src/database/outputTypeSchemas/RandomImageCreateManyArgsSchema.ts
import { z } from "zod";
var RandomImageCreateManyArgsSchema = z.object({
  data: z.union([RandomImageCreateManyInputSchema, RandomImageCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var RandomImageCreateManyArgsSchema_default = RandomImageCreateManyArgsSchema;

export {
  RandomImageCreateManyArgsSchema,
  RandomImageCreateManyArgsSchema_default
};
//# sourceMappingURL=chunk-XWNZS74T.js.map