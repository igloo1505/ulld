import {
  RelatedValuesUncheckedUpdateManyInputSchema
} from "./chunk-XQFEWVZZ.js";
import {
  RelatedValuesUpdateManyMutationInputSchema
} from "./chunk-2ZV5K5FH.js";
import {
  RelatedValuesWhereInputSchema
} from "./chunk-LSOXTUZL.js";

// src/database/outputTypeSchemas/RelatedValuesUpdateManyArgsSchema.ts
import { z } from "zod";
var RelatedValuesUpdateManyArgsSchema = z.object({
  data: z.union([RelatedValuesUpdateManyMutationInputSchema, RelatedValuesUncheckedUpdateManyInputSchema]),
  where: RelatedValuesWhereInputSchema.optional()
}).strict();
var RelatedValuesUpdateManyArgsSchema_default = RelatedValuesUpdateManyArgsSchema;

export {
  RelatedValuesUpdateManyArgsSchema,
  RelatedValuesUpdateManyArgsSchema_default
};
//# sourceMappingURL=chunk-4Q3FSDLY.js.map