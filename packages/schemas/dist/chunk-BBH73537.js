import {
  RandomImageCreateInputSchema
} from "./chunk-C2SFCEKF.js";
import {
  RandomImageUncheckedCreateInputSchema
} from "./chunk-JZFKZZUV.js";

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
//# sourceMappingURL=chunk-BBH73537.js.map