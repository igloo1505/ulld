import {
  BibUpdateManyMutationInputSchema
} from "./chunk-72NO6XUG.js";
import {
  BibUncheckedUpdateManyInputSchema
} from "./chunk-DDFVT4BL.js";
import {
  BibWhereInputSchema
} from "./chunk-LSOXTUZL.js";

// src/database/outputTypeSchemas/BibUpdateManyArgsSchema.ts
import { z } from "zod";
var BibUpdateManyArgsSchema = z.object({
  data: z.union([BibUpdateManyMutationInputSchema, BibUncheckedUpdateManyInputSchema]),
  where: BibWhereInputSchema.optional()
}).strict();
var BibUpdateManyArgsSchema_default = BibUpdateManyArgsSchema;

export {
  BibUpdateManyArgsSchema,
  BibUpdateManyArgsSchema_default
};
//# sourceMappingURL=chunk-ZDYF4DQD.js.map