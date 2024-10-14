import {
  DietScalarWhereInputSchema
} from "./chunk-2TX4C7P4.js";
import {
  DietUncheckedUpdateManyWithoutItemsInputSchema
} from "./chunk-JPCVJ4ZG.js";
import {
  DietUpdateManyMutationInputSchema
} from "./chunk-5P7JIK5S.js";

// src/database/inputTypeSchemas/DietUpdateManyWithWhereWithoutItemsInputSchema.ts
import { z } from "zod";
var DietUpdateManyWithWhereWithoutItemsInputSchema = z.object({
  where: z.lazy(() => DietScalarWhereInputSchema),
  data: z.union([z.lazy(() => DietUpdateManyMutationInputSchema), z.lazy(() => DietUncheckedUpdateManyWithoutItemsInputSchema)])
}).strict();
var DietUpdateManyWithWhereWithoutItemsInputSchema_default = DietUpdateManyWithWhereWithoutItemsInputSchema;

export {
  DietUpdateManyWithWhereWithoutItemsInputSchema,
  DietUpdateManyWithWhereWithoutItemsInputSchema_default
};
//# sourceMappingURL=chunk-L2ALUH3B.js.map