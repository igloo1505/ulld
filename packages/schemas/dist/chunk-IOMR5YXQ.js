import {
  RelatedValuesUncheckedUpdateManyInputSchema
} from "./chunk-TSOPGTUK.js";
import {
  RelatedValuesUpdateManyMutationInputSchema
} from "./chunk-OJECK4MZ.js";
import {
  RelatedValuesWhereInputSchema
} from "./chunk-XHIJ766H.js";

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
//# sourceMappingURL=chunk-IOMR5YXQ.js.map