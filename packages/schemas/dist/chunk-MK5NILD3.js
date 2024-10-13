import {
  RandomImageWhereUniqueInputSchema
} from "./chunk-ZEPTB4HC.js";

// src/database/outputTypeSchemas/RandomImageDeleteArgsSchema.ts
import { z } from "zod";
var RandomImageSelectSchema = z.object({
  path: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
var RandomImageDeleteArgsSchema = z.object({
  select: RandomImageSelectSchema.optional(),
  where: RandomImageWhereUniqueInputSchema
}).strict();
var RandomImageDeleteArgsSchema_default = RandomImageDeleteArgsSchema;

export {
  RandomImageSelectSchema,
  RandomImageDeleteArgsSchema,
  RandomImageDeleteArgsSchema_default
};
//# sourceMappingURL=chunk-MK5NILD3.js.map