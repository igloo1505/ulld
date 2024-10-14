import {
  RandomImageCreateInputSchema
} from "./chunk-TSFSCV2I.js";
import {
  RandomImageUncheckedCreateInputSchema
} from "./chunk-4ZXR3LEC.js";

// src/database/outputTypeSchemas/RandomImageCreateArgsSchema.ts
import { z } from "zod";
var RandomImageSelectSchema = z.object({
  path: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
var RandomImageCreateArgsSchema = z.object({
  select: RandomImageSelectSchema.optional(),
  data: z.union([RandomImageCreateInputSchema, RandomImageUncheckedCreateInputSchema])
}).strict();
var RandomImageCreateArgsSchema_default = RandomImageCreateArgsSchema;

export {
  RandomImageSelectSchema,
  RandomImageCreateArgsSchema,
  RandomImageCreateArgsSchema_default
};
//# sourceMappingURL=chunk-SMJEK3IP.js.map