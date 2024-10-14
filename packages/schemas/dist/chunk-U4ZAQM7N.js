import {
  ServingScalarWhereInputSchema
} from "./chunk-LDU6EOA5.js";
import {
  ServingUncheckedUpdateManyWithoutItemInputSchema
} from "./chunk-CKWHLXAV.js";
import {
  ServingUpdateManyMutationInputSchema
} from "./chunk-JVQHRCWA.js";

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
//# sourceMappingURL=chunk-U4ZAQM7N.js.map