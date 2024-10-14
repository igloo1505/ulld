import {
  CitationsGroupUncheckedUpdateManyInputSchema
} from "./chunk-MTIAB2SE.js";
import {
  CitationsGroupUpdateManyMutationInputSchema
} from "./chunk-WEUDJZRI.js";
import {
  CitationsGroupWhereInputSchema
} from "./chunk-LSOXTUZL.js";

// src/database/outputTypeSchemas/CitationsGroupUpdateManyArgsSchema.ts
import { z } from "zod";
var CitationsGroupUpdateManyArgsSchema = z.object({
  data: z.union([CitationsGroupUpdateManyMutationInputSchema, CitationsGroupUncheckedUpdateManyInputSchema]),
  where: CitationsGroupWhereInputSchema.optional()
}).strict();
var CitationsGroupUpdateManyArgsSchema_default = CitationsGroupUpdateManyArgsSchema;

export {
  CitationsGroupUpdateManyArgsSchema,
  CitationsGroupUpdateManyArgsSchema_default
};
//# sourceMappingURL=chunk-M7CKBSJJ.js.map