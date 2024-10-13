import {
  ServingUncheckedUpdateWithoutItemInputSchema
} from "./chunk-JKR4KFHK.js";
import {
  ServingUpdateWithoutItemInputSchema
} from "./chunk-BYSJ263J.js";
import {
  ServingWhereUniqueInputSchema
} from "./chunk-XBJQZROE.js";

// src/database/inputTypeSchemas/ServingUpdateWithWhereUniqueWithoutItemInputSchema.ts
import { z } from "zod";
var ServingUpdateWithWhereUniqueWithoutItemInputSchema = z.object({
  where: z.lazy(() => ServingWhereUniqueInputSchema),
  data: z.union([z.lazy(() => ServingUpdateWithoutItemInputSchema), z.lazy(() => ServingUncheckedUpdateWithoutItemInputSchema)])
}).strict();
var ServingUpdateWithWhereUniqueWithoutItemInputSchema_default = ServingUpdateWithWhereUniqueWithoutItemInputSchema;

export {
  ServingUpdateWithWhereUniqueWithoutItemInputSchema,
  ServingUpdateWithWhereUniqueWithoutItemInputSchema_default
};
//# sourceMappingURL=chunk-RFG6BD4D.js.map