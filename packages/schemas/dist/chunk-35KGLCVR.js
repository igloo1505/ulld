import {
  DietaryItemUncheckedUpdateManyInputSchema
} from "./chunk-ZWCFW5DB.js";
import {
  DietaryItemUpdateManyMutationInputSchema
} from "./chunk-MOLTCIJR.js";
import {
  DietaryItemWhereInputSchema
} from "./chunk-MDAJAPVT.js";

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
//# sourceMappingURL=chunk-35KGLCVR.js.map