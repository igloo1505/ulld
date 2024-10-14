import {
  DietUncheckedUpdateManyInputSchema
} from "./chunk-NESULJF3.js";
import {
  DietUpdateManyMutationInputSchema
} from "./chunk-5P7JIK5S.js";
import {
  DietWhereInputSchema
} from "./chunk-MDAJAPVT.js";

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
//# sourceMappingURL=chunk-GQVZHOQ3.js.map