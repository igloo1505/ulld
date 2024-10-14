import {
  RandomImageUpdateManyMutationInputSchema
} from "./chunk-XM6VNDQ4.js";
import {
  RandomImageUncheckedUpdateManyInputSchema
} from "./chunk-H7TMT4BD.js";
import {
  RandomImageWhereInputSchema
} from "./chunk-XSVMF53C.js";

// src/database/outputTypeSchemas/RandomImageUpdateManyArgsSchema.ts
import { z } from "zod";
var RandomImageUpdateManyArgsSchema = z.object({
  data: z.union([RandomImageUpdateManyMutationInputSchema, RandomImageUncheckedUpdateManyInputSchema]),
  where: RandomImageWhereInputSchema.optional()
}).strict();
var RandomImageUpdateManyArgsSchema_default = RandomImageUpdateManyArgsSchema;

export {
  RandomImageUpdateManyArgsSchema,
  RandomImageUpdateManyArgsSchema_default
};
//# sourceMappingURL=chunk-ECK2STJ2.js.map