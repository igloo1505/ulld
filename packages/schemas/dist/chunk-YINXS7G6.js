import {
  DietaryItemUncheckedUpdateManyInputSchema
} from "./chunk-F2DOXL62.js";
import {
  DietaryItemUpdateManyMutationInputSchema
} from "./chunk-EKE5CXKK.js";
import {
  DietaryItemWhereInputSchema
} from "./chunk-4FCA5YKO.js";

// src/database/outputTypeSchemas/DietaryItemUpdateManyArgsSchema.ts
import { z } from "zod";
var DietaryItemUpdateManyArgsSchema = z.object({
  data: z.union([DietaryItemUpdateManyMutationInputSchema, DietaryItemUncheckedUpdateManyInputSchema]),
  where: DietaryItemWhereInputSchema.optional()
}).strict();
var DietaryItemUpdateManyArgsSchema_default = DietaryItemUpdateManyArgsSchema;

export {
  DietaryItemUpdateManyArgsSchema,
  DietaryItemUpdateManyArgsSchema_default
};
//# sourceMappingURL=chunk-YINXS7G6.js.map