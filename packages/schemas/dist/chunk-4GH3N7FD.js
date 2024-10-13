import {
  DietScalarWhereInputSchema
} from "./chunk-FAEQNT2D.js";
import {
  DietUncheckedUpdateManyWithoutItemsInputSchema
} from "./chunk-AVBZSSD3.js";
import {
  DietUpdateManyMutationInputSchema
} from "./chunk-WFIA3AND.js";

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
//# sourceMappingURL=chunk-4GH3N7FD.js.map