import {
  RandomImageCreateManyInputSchema
} from "./chunk-2Q5PBVLX.js";

// src/database/outputTypeSchemas/RandomImageCreateManyAndReturnArgsSchema.ts
import { z } from "zod";
var RandomImageCreateManyAndReturnArgsSchema = z.object({
  data: z.union([RandomImageCreateManyInputSchema, RandomImageCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var RandomImageCreateManyAndReturnArgsSchema_default = RandomImageCreateManyAndReturnArgsSchema;

export {
  RandomImageCreateManyAndReturnArgsSchema,
  RandomImageCreateManyAndReturnArgsSchema_default
};
//# sourceMappingURL=chunk-5FHTI2QV.js.map