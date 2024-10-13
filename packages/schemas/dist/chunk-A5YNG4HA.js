import {
  ServingScalarWhereInputSchema
} from "./chunk-TAJRBVO7.js";
import {
  ServingUncheckedUpdateManyWithoutItemInputSchema
} from "./chunk-3HPHJJTB.js";
import {
  ServingUpdateManyMutationInputSchema
} from "./chunk-GB2CAEBM.js";

// src/database/inputTypeSchemas/ServingUpdateManyWithWhereWithoutItemInputSchema.ts
import { z } from "zod";
var ServingUpdateManyWithWhereWithoutItemInputSchema = z.object({
  where: z.lazy(() => ServingScalarWhereInputSchema),
  data: z.union([z.lazy(() => ServingUpdateManyMutationInputSchema), z.lazy(() => ServingUncheckedUpdateManyWithoutItemInputSchema)])
}).strict();
var ServingUpdateManyWithWhereWithoutItemInputSchema_default = ServingUpdateManyWithWhereWithoutItemInputSchema;

export {
  ServingUpdateManyWithWhereWithoutItemInputSchema,
  ServingUpdateManyWithWhereWithoutItemInputSchema_default
};
//# sourceMappingURL=chunk-A5YNG4HA.js.map