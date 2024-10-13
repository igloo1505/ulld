import {
  RandomImageUpdateManyMutationInputSchema
} from "./chunk-T5YXDKSP.js";
import {
  RandomImageUncheckedUpdateManyInputSchema
} from "./chunk-WU4ASUMU.js";
import {
  RandomImageWhereInputSchema
} from "./chunk-U7V5V5ZX.js";

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
//# sourceMappingURL=chunk-2FG6IO6B.js.map