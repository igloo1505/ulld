import {
  CitationsGroupUncheckedUpdateManyInputSchema
} from "./chunk-W5QDYCGF.js";
import {
  CitationsGroupUpdateManyMutationInputSchema
} from "./chunk-2L2J2NWX.js";
import {
  CitationsGroupWhereInputSchema
} from "./chunk-XHIJ766H.js";

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
//# sourceMappingURL=chunk-CPQBGEPK.js.map