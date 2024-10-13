import {
  RandomImageCreateInputSchema
} from "./chunk-C2SFCEKF.js";
import {
  RandomImageUncheckedCreateInputSchema
} from "./chunk-JZFKZZUV.js";
import {
  RandomImageUpdateInputSchema
} from "./chunk-ALQ4SDK3.js";
import {
  RandomImageUncheckedUpdateInputSchema
} from "./chunk-QVIBHU7I.js";
import {
  RandomImageWhereUniqueInputSchema
} from "./chunk-ZEPTB4HC.js";

// src/database/outputTypeSchemas/RandomImageUpsertArgsSchema.ts
import { z } from "zod";
var RandomImageSelectSchema = z.object({
  path: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
var RandomImageUpsertArgsSchema = z.object({
  select: RandomImageSelectSchema.optional(),
  where: RandomImageWhereUniqueInputSchema,
  create: z.union([RandomImageCreateInputSchema, RandomImageUncheckedCreateInputSchema]),
  update: z.union([RandomImageUpdateInputSchema, RandomImageUncheckedUpdateInputSchema])
}).strict();
var RandomImageUpsertArgsSchema_default = RandomImageUpsertArgsSchema;

export {
  RandomImageSelectSchema,
  RandomImageUpsertArgsSchema,
  RandomImageUpsertArgsSchema_default
};
//# sourceMappingURL=chunk-3GYBMFAZ.js.map