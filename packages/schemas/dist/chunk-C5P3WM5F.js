import {
  DietUncheckedUpdateManyInputSchema
} from "./chunk-HGJY7HKS.js";
import {
  DietUpdateManyMutationInputSchema
} from "./chunk-WFIA3AND.js";
import {
  DietWhereInputSchema
} from "./chunk-4FCA5YKO.js";

// src/database/outputTypeSchemas/DietUpdateManyArgsSchema.ts
import { z } from "zod";
var DietUpdateManyArgsSchema = z.object({
  data: z.union([DietUpdateManyMutationInputSchema, DietUncheckedUpdateManyInputSchema]),
  where: DietWhereInputSchema.optional()
}).strict();
var DietUpdateManyArgsSchema_default = DietUpdateManyArgsSchema;

export {
  DietUpdateManyArgsSchema,
  DietUpdateManyArgsSchema_default
};
//# sourceMappingURL=chunk-C5P3WM5F.js.map