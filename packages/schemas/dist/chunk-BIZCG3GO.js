import {
  RandomImageUpdateInputSchema
} from "./chunk-ALQ4SDK3.js";
import {
  RandomImageUncheckedUpdateInputSchema
} from "./chunk-QVIBHU7I.js";
import {
  RandomImageWhereUniqueInputSchema
} from "./chunk-ZEPTB4HC.js";

// src/database/outputTypeSchemas/RandomImageUpdateArgsSchema.ts
import { z } from "zod";
var RandomImageSelectSchema = z.object({
  path: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
var RandomImageUpdateArgsSchema = z.object({
  select: RandomImageSelectSchema.optional(),
  data: z.union([RandomImageUpdateInputSchema, RandomImageUncheckedUpdateInputSchema]),
  where: RandomImageWhereUniqueInputSchema
}).strict();
var RandomImageUpdateArgsSchema_default = RandomImageUpdateArgsSchema;

export {
  RandomImageSelectSchema,
  RandomImageUpdateArgsSchema,
  RandomImageUpdateArgsSchema_default
};
//# sourceMappingURL=chunk-BIZCG3GO.js.map