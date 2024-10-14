import {
  ServingUncheckedUpdateWithoutItemInputSchema
} from "./chunk-QX3GHUID.js";
import {
  ServingUpdateWithoutItemInputSchema
} from "./chunk-VFB5WXXW.js";
import {
  ServingWhereUniqueInputSchema
} from "./chunk-BRBARM24.js";

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
//# sourceMappingURL=chunk-ADXXXKPT.js.map